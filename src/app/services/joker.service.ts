import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BehaviorSubject } from "rxjs";
import { Level } from "../entities/iLevel";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { FinishGameComponent } from "../components/joker/finish-game/finish-game.component";


@Injectable({ providedIn: 'root' })
export class JokerService {

    baseURL = `${environment.apiUrl}question`;

    private questionSource = new BehaviorSubject<{ question: any, decryptedAnswer: string } | null>(null);
    question = this.questionSource.asObservable();
    private counterSource = new BehaviorSubject<number>(1);
    counter = this.counterSource.asObservable();
    private lifelinesSource = new BehaviorSubject<Array<boolean>>([true, true, true, true, true, true, true, true]);
    lifelines = this.lifelinesSource.asObservable();
    private levelsSource = new BehaviorSubject<Array<Level>>([{ value: 250, active: true }, { value: 500, active: false }, { value: 1000, active: false },
    { value: 2000, active: false }, { value: 5000, active: false }, { value: 10000, active: false }, { value: 25000, active: false }, { value: 50000, active: false }]);
    levels = this.levelsSource.asObservable();
    private keyString = environment.encriptionKey; // must match backend key

    constructor(
        private http: HttpClient,
        public dialog: MatDialog
    ) { }

    nextQuestion(result) {
        if (this.counterSource.value == 12) {
            if (result === "correct") {

            } else {
                if (this.findHowManyLifelines() > 0) {
                    this.removeLifelinesWrongAnswer()
                } else {
                    this.previousLevel()
                }
            }
            this.finishGame()

            return
        }

        this.incrementCounter()
        if (result === "correct") {
            this.getQuestion()
            this.nextLevel()
        } else {
            this.getQuestion()
            if (this.findHowManyLifelines() > 0) {
                this.removeLifelinesWrongAnswer()
            } else {
                this.previousLevel()
            }
        }
    }

    getQuestion() {
        let difficulty = "Easy"
        if (this.counterSource.value < 5) {
            difficulty = "Easy"
        } else {
            if (this.counterSource.value < 9) {
                difficulty = "Medium"
            } else {
                difficulty = "Hard"
            }
        }
        return this.http.get(`${this.baseURL}?difficulty=${encodeURIComponent(difficulty)}`).subscribe(async res => {
            let question = JSON.parse(JSON.stringify(res))
            const decryptedAnswer = await this.decryptAnswer(question.answer);
            question.options = this.shuffleArray(question.options);
            this.questionSource.next({ question: question, decryptedAnswer });
        });
    }

    incrementCounter() {
        this.counterSource.next(this.counterSource.value + 1);
    }

    resetCounter() {
        this.counterSource.next(1);
    }

    resetLifelines() {
        this.lifelinesSource = new BehaviorSubject<Array<boolean>>([true, true, true, true, true, true, true, true]);

    }

    resetLevels() {
        this.levelsSource = new BehaviorSubject<Array<Level>>([{ value: 250, active: true }, { value: 500, active: false }, { value: 1000, active: false },
        { value: 2000, active: false }, { value: 5000, active: false }, { value: 10000, active: false }, { value: 25000, active: false }, { value: 50000, active: false }]);
    }

    reset() {
        this.counterSource.next(1);
        this.lifelinesSource.next([true, true, true, true, true, true, true, true]); // spread to avoid mutations
        this.levelsSource.next([{ value: 250, active: true }, { value: 500, active: false }, { value: 1000, active: false },
        { value: 2000, active: false }, { value: 5000, active: false }, { value: 10000, active: false }, { value: 25000, active: false }, { value: 50000, active: false }]); // deep copy
        this.getQuestion()
    }

    shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    async decryptAnswer(encryptedBase64: string): Promise<string> {
        const keyData = new TextEncoder().encode(this.keyString);
        const key = await crypto.subtle.importKey("raw", keyData, "AES-GCM", false, ["decrypt"]);

        const encryptedBytes = Uint8Array.from(atob(encryptedBase64), c => c.charCodeAt(0));
        const nonceSize = 12; // AES-GCM standard nonce size
        const nonce = encryptedBytes.slice(0, nonceSize);
        const ciphertext = encryptedBytes.slice(nonceSize);

        const decryptedBuffer = await crypto.subtle.decrypt(
            { name: "AES-GCM", iv: nonce },
            key,
            ciphertext
        );

        return new TextDecoder().decode(decryptedBuffer);
    }

    removeLifelinesWrongAnswer() {
        let count = 0;
        for (let i = 0; i < this.lifelinesSource.value.length; i++) {
            if (this.lifelinesSource.value[i] === true) {
                this.lifelinesSource.value[i] = false;
                count++;
                if (count === 2) break;
            }
        }
    }

    nextLevel() {
        if (this.findLastLevelActive() < 11) {
            this.levelsSource.value[this.findLastLevelActive() + 1].active = true
        }
    }

    previousLevel() {

        if (this.findLastLevelActive() > 1) {
            this.levelsSource.value[this.findLastLevelActive()].active = false
            this.levelsSource.value[this.findLastLevelActive()].active = false
        } else {
            if (this.findLastLevelActive() < 2 && this.findLastLevelActive() > 0) {
                this.levelsSource.value[this.findLastLevelActive()].active = false
            }
        }

    }


    findLastLevelActive(): number {
        for (let i = 0; i < this.levelsSource.value.length; i++) {
            if (this.levelsSource.value[i].active == false) {
                return i - 1
            }

        }
        return 0;
    }

    findHowManyLifelines() {
        let counter = 0
        for (let i = 0; i < this.lifelinesSource.value.length; i++) {
            if (this.lifelinesSource.value[i] === true) {
                counter++
            }
        }
        return counter;
    }

    finishGame() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = '80%'
        dialogConfig.minHeight = '700px'
        dialogConfig.autoFocus = false
        

        const dialogRef = this.dialog.open(FinishGameComponent, {
           data:  this.levels

        }  );



        dialogRef.afterClosed().subscribe(result => {
            this.reset()
        });
    }
}
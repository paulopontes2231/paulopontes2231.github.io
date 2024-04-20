import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerDashboardDetailComponent } from './player-dashboard-detail/player-dashboard-detail.component';
import { PlayerService } from 'src/app/services/player.service';
import { MatTableDataSource } from '@angular/material/table'
import { MatSort } from '@angular/material/sort'
import { MatPaginator } from '@angular/material/paginator'
import { MatDialog } from '@angular/material/dialog'
import { MatDialogConfig } from '@angular/material/dialog'
import { Player } from 'src/app/entities/player';
import { InstructionsComponent } from '../instructions/instructions.component';

@Component({
  selector: 'app-player-dashboard',
  templateUrl: './player-dashboard.component.html',
  styleUrls: ['./player-dashboard.component.scss']
})
export class PlayerDashboardComponent implements OnInit {

  players: Player[] = []
  playerList2: Player[] = []
  bestRatings: any[] = []
  pageSizeOptions = [5, 10]
  fileToUpload: File | null = null;

  dataSource = new MatTableDataSource<Player>(this.players)
  displayedColumns = ['name', 'club', 'age', 'price', 'position', 'bestRating', 'totalAttributes', 'actions'];

  @ViewChild('fileInput') el!: ElementRef;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private router: Router,
    private playerService: PlayerService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
/*     this.playerService.getPlayers()
 */    this.playerService.playersChanged.subscribe(
    (data: Player[]) => {
      /*  this.dataSource.data = data; */
    }
  )
    this.playerService.refreshPlayersList()
    this.dataSource.data.push(new Player("Zé", "FC Porto", "RW", 19, "10M", "18", 12, 16, 11, 17, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1))
    this.dataSource.data.push(new Player("Zé", "FC Porto", "RW", 20, "10M", "18", 12, 16, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1))
    this.dataSource.data.push(new Player("Zé", "FC Porto", "RW", 21, "10M", "18", 12, 16, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1))
    this.dataSource.data.push(new Player("Zé", "FC Porto", "RW", 19, "10M", "18", 12, 16, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1))
    this.dataSource.data.push(new Player("Zé", "FC Porto", "RW", 19, "10M", "18", 12, 16, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1))
    this.dataSource.data.push(new Player("Zé", "FC Porto", "RW", 19, "10M", "18", 12, 16, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1))
    this.dataSource.data.push(new Player("Zé", "FC Porto", "RW", 19, "10M", "18", 12, 16, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1))
    this.dataSource.data.push(new Player("Zé", "FC Porto", "RW", 19, "10M", "18", 12, 16, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1))
    this.dataSource.data.push(new Player("Zé", "FC Porto", "RW", 19, "10M", "18", 12, 16, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1))
    this.dataSource.data.push(new Player("Zé", "FC Porto", "RW", 19, "10M", "18", 12, 16, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1))
    this.dataSource.data.push(new Player("Zé", "FC Porto", "RW", 19, "10M", "18", 12, 16, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1))
    this.dataSource.data.push(new Player("Zé", "FC Porto", "RW", 19, "10M", "18", 12, 16, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1))
    this.dataSource.data.push(new Player("Zé", "FC Porto", "RW", 19, "10M", "18", 12, 16, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1))
    this.dataSource.data.push(new Player("Zé", "FC Porto", "RW", 19, "10M", "18", 12, 16, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1))
    this.dataSource.data.push(new Player("Zé", "FC Porto", "RW", 19, "10M", "18", 12, 16, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1))
    this.dataSource.data.push(new Player("Zé", "FC Porto", "RW", 19, "10M", "18", 12, 16, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1))
    this.dataSource.data.push(new Player("Zé", "FC Porto", "RW", 19, "10M", "18", 12, 16, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1))
    this.dataSource.data.push(new Player("Zé", "FC Porto", "RW", 19, "10M", "18", 12, 16, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1))
    this.dataSource.data.push(new Player("Zé", "FC Porto", "RW", 19, "10M", "18", 12, 16, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1))
    this.dataSource.data.push(new Player("Zé", "FC Porto", "RW", 19, "10M", "18", 12, 16, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1))
    this.dataSource.data.push(new Player("Zé", "FC Porto", "RW", 19, "10M", "18", 12, 16, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1))
    this.dataSource.data.push(new Player("Zé", "FC Porto", "RW", 19, "10M", "18", 12, 16, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1))
    this.dataSource.data.push(new Player("Zé", "FC Porto", "RW", 19, "10M", "18", 12, 16, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1))
    this.dataSource.data.push(new Player("Zé", "FC Porto", "RW", 19, "10M", "18", 12, 16, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1))
    this.dataSource.data.push(new Player("Zé", "FC Porto", "RW", 19, "10M", "18", 12, 16, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1))
    this.dataSource.data.push(new Player("Zé", "FC Porto", "RW", 19, "10M", "18", 12, 16, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1))
    this.dataSource.data.push(new Player("Zé", "FC Porto", "RW", 19, "10M", "18", 12, 16, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1))
    this.dataSource.data.push(new Player("Zé", "FC Porto", "RW", 19, "10M", "18", 12, 16, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1))
    this.dataSource.data.push(new Player("Zé", "FC Porto", "RW", 19, "10M", "18", 12, 16, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1))
    this.dataSource.data[0].ratings = [{ position: "IF", rating: 19 }, { position: "CWB", rating: 18 }, { position: "MEZ", rating: 20 }]

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }

  applyFilter(value: any) {
    this.dataSource.filter = value.trim().toLowerCase()
  }

  onConsult(row: any) {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.data = row
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.width = '75%'
    dialogConfig.height = '72%'
    this.dialog.open(PlayerDashboardDetailComponent, dialogConfig)
  }

  onImportFile(files: any) {
    let fileReader = new FileReader();
    fileReader.onload = async (e: any) => {
      if (this.el.nativeElement.files[0].type != "text/csv") {
        return console.log("ERRO")
      }
      console.log(e.target.result)
      //enviar para o backend
    }
    fileReader.readAsText(this.el.nativeElement.files[0]);
  }

  onDelete(row: any) {
    this.playerService.deletePlayer(row._id)/* .subscribe((res) => {
      this.playerService.refreshPlayersList()
    }) */
  }

  openInstructions() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '80%'
    dialogConfig.height = '450px'
    dialogConfig.autoFocus = false
    const dialogRef = this.dialog.open(InstructionsComponent, {
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  goBack() {
    this.router.navigate(["/"])
  }

  openDetails(row: any) {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.data = row
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.width = '75%'
    dialogConfig.height = '66%'
    dialogConfig.disableClose = false
    this.dialog.open(PlayerDashboardDetailComponent, dialogConfig)
  }

  getBestRating(row: any) {
    if (row.ratings == null) {
      row.ratings = [{ position: "N/A", rating: 0 }, { position: "N/A", rating: 0 }, { position: "N/A", rating: 0 }]
    }

    return row.ratings.reduce((maxPlayer: any, currentPlayer: any) => {
      return currentPlayer.rating > maxPlayer.rating ? currentPlayer : maxPlayer;
    });
  }

  getTotalAttributes(row: any) {
    row.bestRating = this.getBestRating(row).rating
    row.totalAttributes = row.corners + row.crossing + row.dribbling + row.finishing +
      row.firstTouch + row.freeKick + row.heading + row.longShots +
      row.longThrows + row.marking + row.passing + row.penaltyTaking +
      row.tackling + row.technique + row.aggression + row.anticipation +
      row.bravery + row.composure + row.concentration + row.decisions +
      row.determination + row.flair + row.leadership + row.offBall +
      row.positioning + row.teamWork + row.vision + row.workRate +
      row.acceleration + row.agility + row.balance + row.jumpingReach +
      row.naturalFitness + row.pace + row.stamina + row.strength
    return row.corners + row.crossing + row.dribbling + row.finishing +
      row.firstTouch + row.freeKick + row.heading + row.longShots +
      row.longThrows + row.marking + row.passing + row.penaltyTaking +
      row.tackling + row.technique + row.aggression + row.anticipation +
      row.bravery + row.composure + row.concentration + row.decisions +
      row.determination + row.flair + row.leadership + row.offBall +
      row.positioning + row.teamWork + row.vision + row.workRate +
      row.acceleration + row.agility + row.balance + row.jumpingReach +
      row.naturalFitness + row.pace + row.stamina + row.strength
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerDashboardDetailComponent } from './player-dashboard-detail/player-dashboard-detail.component';
import { PlayerService } from 'src/app/services/player.service';
import { MatTableDataSource} from '@angular/material/table'
import { MatSort} from '@angular/material/sort'
import { MatPaginator} from '@angular/material/paginator'
import { MatDialog} from '@angular/material/dialog'
import { MatDialogConfig} from '@angular/material/dialog'
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
  pageSizeOptions = [5,10]
  
  dataSource = new MatTableDataSource<Player>(this.players)
  displayedColumns = ['name', 'club', 'age', 'price','position' ,'bestRating' , 'actions'];

  
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
    this.dataSource.data.push(new Player("1","1",1,"1",'',"1",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1))
    this.dataSource.data.push(new Player("1","2",1,"1",'',"1",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1))
    this.dataSource.data.push(new Player("1","3",1,"1",'',"1",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1))
    this.dataSource.data.push(new Player("1","4",1,"1",'',"1",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1))
    this.dataSource.data.push(new Player("1","5",1,"1",'',"1",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1))
    this.dataSource.data.push(new Player("1","6",1,"1",'',"1",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1))
    this.dataSource.data.push(new Player("1","3",1,"1",'',"1",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1))
    this.dataSource.data.push(new Player("1","4",1,"1",'',"1",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1))
    this.dataSource.data.push(new Player("1","5",1,"1",'',"1",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1))
    this.dataSource.data.push(new Player("1","6",1,"1",'',"1",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1))
    this.dataSource.data.push(new Player("1","3",1,"1",'',"1",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1))
    this.dataSource.data.push(new Player("1","4",1,"1",'',"1",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1))
    this.dataSource.data.push(new Player("1","5",1,"1",'',"1",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1))
    this.dataSource.data.push(new Player("1","6",1,"1",'',"1",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1))
    this.dataSource.data.push(new Player("1","3",1,"1",'',"1",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1))
    this.dataSource.data.push(new Player("1","4",1,"1",'',"1",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1))
    this.dataSource.data.push(new Player("1","5",1,"1",'',"1",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1))
    this.dataSource.data.push(new Player("1","6",1,"1",'',"1",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1))
    this.dataSource.data[0].ratings = [" 16", " 19", " 17", " 20"]
    this.dataSource.data[1].ratings = [" 16", " 19", " 17", " 20"]
    this.dataSource.data[2].ratings = [" 16", " 19", " 17", " 20"]
    this.dataSource.data[3].ratings = [" 16", " 19", " 17", " 20"]
    this.dataSource.data[4].ratings = [" 16", " 19", " 17", " 20"]
    this.dataSource.data[5].ratings = [" 16", " 19", " 17", " 20"]
    this.dataSource.data[6].ratings = [" 16", " 19", " 17", " 20"]
    this.dataSource.data[7].ratings = [" 16", " 19", " 17", " 20"]
    this.dataSource.data[8].ratings = [" 16", " 19", " 17", " 20"]
    this.dataSource.data[9].ratings = [" 16", " 19", " 17", " 20"]
    this.dataSource.data[10].ratings = [" 16", " 19", " 17", " 20"]
    this.dataSource.data[11].ratings = [" 16", " 19", " 17", " 20"]
    this.dataSource.data[12].ratings = [" 16", " 19", " 17", " 20"]
    this.dataSource.data[13].ratings = [" 16", " 19", " 17", " 20"]
    this.dataSource.data[14].ratings = [" 16", " 19", " 17", " 20"]
    this.dataSource.data[15].ratings = [" 16", " 19", " 17", " 20"]
    this.dataSource.data[16].ratings = [" 16", " 19", " 17", " 20"]
    this.dataSource.data[17].ratings = [" 16", " 19", " 17", " 20"]
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }

  applyFilter(value: any){
    this.dataSource.filter = value.trim().toLowerCase()
  }

  onConsult(row: any) {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.data = row
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.width = '75%'
    dialogConfig.height= '66%'
    this.dialog.open(PlayerDashboardDetailComponent, dialogConfig)
  }

  onDelete(row: any) {
    this.playerService.deletePlayer(row._id)/* .subscribe((res) => {
      this.playerService.refreshPlayersList()
    }) */
  }

  openInstructions(){
    const dialogConfig= new MatDialogConfig();
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

  openDetails(row: any){
    const dialogConfig = new MatDialogConfig()
    dialogConfig.data = row
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.width = '75%'
    dialogConfig.height= '66%'
    dialogConfig.disableClose = false
    this.dialog.open(PlayerDashboardDetailComponent, dialogConfig)
  }

  getBestRating(row: any){
    this.bestRatings.push(row.ratings[0].substring(row.ratings[0].lastIndexOf(">") + 2))
    return row.ratings[0].substring(row.ratings[0].lastIndexOf(">") + 2)
  }

}

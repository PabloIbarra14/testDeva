import { Component, OnInit, ViewChild, } from '@angular/core';
import { DataService } from '../../../service/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-ContactTable',
  templateUrl: './ContactTable.component.html',
  styleUrls: ['./ContactTable.component.css']
})
export class ContactTableComponent implements OnInit {

  displayedColumns: string[] = ['title', 'year', 'cast', 'genres'];
  dataSource: any;
  cargando: boolean = true;

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  // MatPaginator Inputs
  pageSizeOptions: number[] = [5, 10, 25, 100];
  constructor(
    private dataService: DataService,
  ) { }

  async ngOnInit() {

    await this.getData();

  }


  private async getData() {


    this.dataService.getData().subscribe(async data => {

      this.dataSource = await new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.cargando = false;


    }
    );
  }


}

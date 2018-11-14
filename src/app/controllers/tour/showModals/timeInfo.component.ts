import { Component, OnInit, Input, Pipe } from '@angular/core';
import { TourService } from '../../../services/tour.service';
import { DateinformationService } from '../../../services/dateinformation.service';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-abouttime',
    templateUrl: './timeInfo.component.html'
})

export class TimeInfoComponent implements OnInit{
    
    
    @Input() idTour: any[];

    public tour: any;
    public dateIntervals = [];
    public hourIntervals = [];
    public dateInfo = [];
    
    
    
    constructor(
        private _tourService: TourService,
        private activeModal: NgbActiveModal,
        private _dateinfoService:  DateinformationService){ }
        
        ngOnInit(){
            this._tourService.getByIdTour(this.idTour)
            .subscribe(res => {
              this.tour = res;
              this.getGeneralDateInfo(this.tour.dateinformations);
            });
        }

        getGeneralDateInfo(dateinformations){
            for(let dateinf of dateinformations){
                this._dateinfoService.getByIdDateInfo(dateinf.id)
                .subscribe(res => {
                  this.hourIntervals.push(res.hour_id);
                  this.dateIntervals.push(res.date_id);
                });
              }
              console.log(this.hourIntervals);
              console.log(this.dateIntervals);

        }

  
    }
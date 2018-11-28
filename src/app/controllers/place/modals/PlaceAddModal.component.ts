import { Component, OnInit} from '@angular/core';
import { PlaceService } from '../../../services/place.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

declare const $: any;

@Component({
    templateUrl: './PlaceAddModal.component.html',
})
export class NgbdModalAddPlaceComponent implements OnInit{
    
    placeForm: FormGroup;
    public currentPlace = {
        name: '',
        nameIsNotValid: false,
        description: '',
        descriptionIsEmpty: false,
        place_type: null,
        noPlaceTypeSelected: true,
        narrative_url: '',
        image_url: ''
    };
    public allPlaces: any[];
    public allTypeOfPlaces = [];

    lat = 19.04334;
    lng = -98.20193;
    
    constructor(
        private _PlaceService: PlaceService,
        public activeModal: NgbActiveModal,
        private formBuilder: FormBuilder) {}

    ngOnInit(){
        this.getPlaces();
        this.getPlaceType();
    }
    
    showNotification(data, from, align){
        $.notify({
            message: "Lugar agregado."
        },{
            type: data.color,
            timer: 1000,
            placement: {
                from: from,
                align: align
            },
            template: `<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">
            <button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>
            <span data-notify="icon"></span>
            <span data-notify="message">{2}</span>
            <div class="progress" data-notify="progressbar">
            <div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>
            </div>
            </div>`,
            onShow: () => {
                this.closeModal();
            }
        });
    }
    
    closeModal() {
        this.activeModal.close('Modal Closed');
    }

    changeMarkerOnMap($event) {
        this.lat = $event.coords.lat;
        this.lng = $event.coords.lng;
    }
    
    addPlace() {
        if (this.fieldsAreGoodToGo()) {
            this._PlaceService.addPlace(
                this.currentPlace.name,
                this.currentPlace.description,
                this.lat,
                this.lng,
                this.currentPlace.narrative_url,
                this.currentPlace.image_url
            ).subscribe(res => {
                console.log(res);
            });
        }
    }

    fieldsAreGoodToGo() {
        if (this.currentPlace.name.length > 5) {
            this.currentPlace.nameIsNotValid = false;
        } else { this.currentPlace.nameIsNotValid = true; return false; }
        if (this.currentPlace.description.length > 10) {
            this.currentPlace.descriptionIsEmpty = false;
        } else { this.currentPlace.descriptionIsEmpty = true; return false; }
        if (this.currentPlace.place_type != null) {
            this.currentPlace.noPlaceTypeSelected = false;
        } else { this.currentPlace.place_type = true; return false; }
        return true;
    }
    
    getPlaces(){
        this._PlaceService.getPlaces()
        .subscribe(res =>{this.allPlaces = res});
    }

    getPlaceType() {
        this._PlaceService.getPlaceType()
        .subscribe(res => {this.allTypeOfPlaces = res;});
    }
      
    private createForm() {
        this.placeForm = this.formBuilder.group({
            name: [null, Validators.compose([
                Validators.required
            ])],
            description: [null, Validators.compose([
                Validators.required,
            ])],
            narrative_url: [null, Validators.compose([
            ])]
        });
    }
}

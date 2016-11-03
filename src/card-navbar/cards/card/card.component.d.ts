import { OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/takeUntil';
import { StateManagerService } from '../../../state-manager.service';
export declare class CardNavbarCardComponent implements OnInit {
    private stateManagerService;
    style: string;
    forTab: string;
    defaultCardForTab: boolean;
    defaultCardForAllTabs: boolean;
    cid: string;
    statusSource: Subject<string>;
    status$: Observable<string>;
    isSelectedCard$: Observable<boolean>;
    state$: Observable<string>;
    constructor(stateManagerService: StateManagerService);
    ngOnInit(): void;
}
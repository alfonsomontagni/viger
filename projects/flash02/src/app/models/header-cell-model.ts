export class HieroglyphColumnHeader {
    actions: string = 'ACTIONS';
    id: string = 'ID';
   status: string = 'STATUS';
    hieroId: string = 'HIEROID';
    type: string = 'TYPE';
    translate: string = 'TRANSLATE';
    img: string = 'Immagine';
    gardinerList: string = 'Gardiner'
}

export enum CellHieroSIZE{
    ACTIONS=120,
    ID=50,
    STATUS=120,
    HIEROID=120,
    TYPE=120,
    TRANSLATE=120,
    IMG=120,
    GARDINERLIST=120
}

export class HeaderCell {
    constructor(
        public name: string,
        public className: string | undefined,
        public cellFormat: string,
        public dropDownValues: Array<string>,
        public sortedBy: string,
        public permissions: any,
        public group: string,
        public displayName: string,
        public allowInvalid: boolean,
        public skipColumnOnPaste: boolean,
        public colId: number,
        public type: string,
        public editor: string,
        public renderer: string | undefined
    ) {

    }

}

export interface HColumn {
    title?: string | null | undefined;
    data?: string | null | undefined;
    editor?: string | null | undefined;
    source?: string []| null | undefined;
    allowInvalid?: boolean | null | undefined;
    skipColumnOnPaste?: boolean | null | undefined;
    type?: string | null | undefined;
    className?: string | null | undefined;
    readOnly?: boolean | null | undefined;
    renderer?: string | null | undefined;
}
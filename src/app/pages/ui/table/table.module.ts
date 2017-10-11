import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { Table } from './table.component';

@NgModule({
    declarations: [
        Table
    ],
    imports: [
        Ng2SmartTableModule
    ],
    bootstrap: [Table]
})

export class TableModule {}

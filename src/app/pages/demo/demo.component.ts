import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'demo',
  templateUrl: './demo.html'
})

export class Demo {
  name: string;
  theUserSaid: string;
  modalRef: BsModalRef;
  public config = {
    animated: true,
    keyboard: true,
    backdrop: 'static',
    ignoreBackdropClick: false
  };

  constructor(private modalService: BsModalService) {}

  //弹出模态框
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  //用户输入内容处理
  onChangeEvent({target}) {
    this.name = target.value;
    console.log(this.name);
  }

  //用户选择结果
  like(isLike) {

    this.modalRef.hide();

    var msg:string = 'I like PrimeNG';
    if(!isLike){
      msg = 'I don\'t really like PrimeNG';
    }
    this.theUserSaid = this.name + ' responded: ' + msg;
  }
}

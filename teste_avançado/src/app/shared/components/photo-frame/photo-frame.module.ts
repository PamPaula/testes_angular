import { PhotoFrameComponent } from './photo-frame.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LikeWidgetModule } from '../like-widget/like-widget.module';

@NgModule({
  declarations: [PhotoFrameComponent],
  imports: [
    CommonModule,
    LikeWidgetModule
  ],
  exports: [PhotoFrameComponent]
})
export class PhotoFrameModule {}

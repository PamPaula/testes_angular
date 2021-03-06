import { buildPhotoList } from 'src/app/shared/components/photo-board/test/build-photos-list';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { PhotoBoardService } from './photo-board.service';
import { Photo } from '../interfaces/photo';

@Injectable()
export class PhotoBoardMockService extends PhotoBoardService {
  public getPhotos(): Observable<Photo[]> {
    return of(buildPhotoList());
  }
}

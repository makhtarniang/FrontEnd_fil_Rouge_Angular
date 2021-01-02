import { TestBed } from '@angular/core/testing';

import { ConfirmationDialog} from './confirmation-dialog.service';

describe('ConfirmationDialog.ServiceService', () => {
  let service: ConfirmationDialog;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmationDialog);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

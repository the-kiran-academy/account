import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountStattementComponent } from './account-stattement.component';

describe('AccountStattementComponent', () => {
  let component: AccountStattementComponent;
  let fixture: ComponentFixture<AccountStattementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountStattementComponent]
    });
    fixture = TestBed.createComponent(AccountStattementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

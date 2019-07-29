import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { loginReducer } from './state/login.reducer';
import { LoginService } from './login.service';
import { LoginEffects } from './state/login.effects';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
	CommonModule,
	StoreModule.forFeature('login', loginReducer),
    EffectsModule.forFeature([LoginEffects])
  ],
  exports: [
  ],
  providers: [LoginService],
  entryComponents: [
    LoginComponent
  ]
})
export class LoginModule { }

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  constructor(private fb: FormBuilder) {}

  formularioContacto = this.fb.group({
    nombre: this.fb.control('', Validators.required),
    contraseña: this.fb.control('', [Validators.required, Validators.minLength(6)]),
    address: this.fb.control(''),
    email: this.fb.control('', [Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'), Validators.required]),
  });

  get emailControl(){
    return this.formularioContacto.get('email')
  }
  get passControl(){
    return this.formularioContacto.get('contraseña')
  }
  get nameControl(){
    return this.formularioContacto.get('nombre')
  }

  onSubmit(): void {
    Swal.fire({
      title: "¡Sesion Iniciada!",
      text: "Bienvenido",
      icon: "success"
    });
  }
}

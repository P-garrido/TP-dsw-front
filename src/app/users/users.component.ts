import { Component, DoCheck, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { UsersService } from '../users.service';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User, userObject } from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements  OnInit {
  list: User[] = [];
  edit: boolean = false;
  add: boolean = false;
  showClientsFlag: boolean = false;
  showEmployeesFlag: boolean = false;
  editId: number = 0;
  userType: number = 0;
  lastUserAdded: User | null = null;
  lastEditedUser: User | undefined = undefined;

  userForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-zñÑA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zñÑA-Z0-9-]+)*$")]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(12)]),
    firstName: new FormControl('', [Validators.required, Validators.pattern("^[a-zñÑA-Z ]*$")], ),
    lastName: new FormControl('', [Validators.required, Validators.pattern("^[a-zñÑA-Z ]*$")] ),
    address: new FormControl('', [Validators.required]),
    userType: new FormControl('', [Validators.required])
  })

  constructor(private service: UsersService) {} 

  ngOnInit(): void {
    if(this.showEmployeesFlag){
      this.getAllEmployees()
    }
    else if (this.showClientsFlag){
      this.getAllClients()
    }
    else{
      this.getAllUsers()
    }
  }

  showOnlyEmployees(){
    this.showClientsFlag = false
    if(!this.showEmployeesFlag){
      this.showEmployeesFlag = true
    }
    else{
      this.showEmployeesFlag = false
    }
    this.ngOnInit()
  }

  showOnlyClients(){
    this.showEmployeesFlag = false
    if(!this.showClientsFlag){
      this.showClientsFlag = true
    }
    else{
      this.showClientsFlag = false
    }
    this.ngOnInit()
  }

  allowEditing(item: User){
    this.edit = true
    this.userForm.patchValue({username: item.userName, password: item.password, 
      email: item.email, phoneNumber: item.phone, firstName: item.firstName, lastName: item.lastName,
      address: item.adress})
    this.userForm.controls.userType.setValue(item.type.toLocaleString()) 
    this.editId = item.idUser
  }

  editUser(){
    const editedUser = {
      id_usuario: this.editId,
      nombre_usuario: this.userForm.value.username,
      clave: this.userForm.value.password, 
      email: this.userForm.value.email, 
      telefono: this.userForm.value.phoneNumber,
      nombre: this.userForm.value.firstName,
      apellido: this.userForm.value.lastName,
      direccion: this.userForm.value.address,
      tipo_usuario: 0 //este numero corresponde a cliente, un empleado deberia ser registrado desde el componente users
    }
    this.service.editUser(editedUser, this.editId)?.subscribe(() => this.ngOnInit())
    this.list.push(new User(this.editId, this.userForm.value.username as string, this.userForm.value.password as string, this.userForm.value.firstName as string, this.userForm.value.lastName as string, this.userForm.value.address as string, this.userForm.value.phoneNumber as string, this.userForm.value.userType as unknown as number, this.userForm.value.email as string));
    this.userForm.reset()
    this.edit = false
    this.lastEditedUser = this.list.find(user => user.idUser === this.editId)
  }

  addUser(){
    const user: userObject = {
      nombre_usuario: this.userForm.value.username as string,
      clave: this.userForm.value.password as string, 
      email: this.userForm.value.email as string, 
      telefono: this.userForm.value.phoneNumber as string,
      nombre: this.userForm.value.firstName as string,
      apellido: this.userForm.value.lastName as string,
      direccion: this.userForm.value.address as string,
      tipo_usuario: this.userType 
    }
    this.service.addUser(user)?.subscribe()
    this.userForm.reset()
    this.add = false
    this.lastUserAdded = new User(-1, user.nombre_usuario, user.clave, user.nombre, user.apellido, user.direccion, user.telefono, user.tipo_usuario, user.email)
    window.location.reload()
  }

  getAllUsers(): void{
    this.list = []
    this.service.getAllUsers()?.subscribe((users: User[])=> {
      users.forEach((user: any) => {
        const object = new User(user.id_usuario, user.nombre_usuario, user.clave, user.nombre, user.apellido, user.direccion, user.telefono, user.tipo_usuario, user.email)
        this.list.push(object)
      })
    })
  }

  deleteUser(item: User): void{
    const userId = item.idUser
    this.service.deleteUser(userId)?.subscribe()
    window.location.reload()
  }

  getAllClients(){
    this.list = []
    this.service.getAllUsers()?.subscribe((allUsers: User[])=> {
      allUsers.forEach((user: any) => {
        const obj = new User(user.id_usuario, user.nombre_usuario, user.clave, user.nombre, user.apellido, user.direccion, user.telefono, user.tipo_usuario, user.email)
        this.list.push(obj)
      })
      this.list = this.list.filter(user => user.type === 0)
    })
  }

  getAllEmployees(){
    this.list = []
    this.service.getAllUsers()?.subscribe((allUsers: User[])=> {
      allUsers.forEach((user: any) => {
        const object= new User(user.id_usuario,user.nombre_usuario, user.clave, user.nombre, user.apellido, user.direccion, user.telefono, user.tipo_usuario, user.email)
        this.list.push(object)
      })
      this.list = this.list.filter(user => user.type === 1)
    })
  }
}

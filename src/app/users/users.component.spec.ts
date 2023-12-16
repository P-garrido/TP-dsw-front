import { ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { UsersService } from '../users.service';
import { userServiceMock, usersResponse } from '../mocks/users.service.mock';
import { AccordionComponent } from 'ngx-bootstrap/accordion';
import { of } from 'rxjs';
import { User } from '../models/user';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersComponent, AccordionComponent],
      imports: [],
      providers: [
        {provide: UsersService, useClass: userServiceMock}
      ]
    });
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all users', () => {
    const fixture = TestBed.createComponent(UsersComponent);
    const service = TestBed.inject(UsersService);
    const result: any[] =   [
      {
        id_usuario: 1,
        nombre_usuario: "prueba",
        contraseña: "prueba",
        nombre: "prueba",
        apellido: "prueba",
        email: "prueba",
        telefono: "00000000",
        direccion: "prueba",
        tipo_usuario: 0
      },
      {
        id_usuario: 2,
        nombre_usuario: "prueba2",
        contraseña: "prueba2",
        nombre: "prueba2",
        apellido: "prueba2",
        email: "prueba2",
        telefono: "11111111",
        direccion: "prueba2",
        tipo_usuario: 1
      }
    ];
    const spyGetUser = jest.spyOn(service, "getAllUsers").mockReturnValue(of(result));
    const component = fixture.componentInstance;
    component.getAllUsers();
    expect(component.list.length).toBeGreaterThan(0)
    expect(component.list[0]?.userName).toBeDefined();
  });

  it('should get only clients', () => {
    const fixture = TestBed.createComponent(UsersComponent);
    const service = TestBed.inject(UsersService);
    const result: any[] =   [
      {
        id_usuario: 1,
        nombre_usuario: "cliente",
        contraseña: "cliente",
        nombre: "cliente",
        apellido: "cliente",
        email: "cliente",
        telefono: "00000000",
        direccion: "cliente",
        tipo_usuario: 0 // 0 es el numero correspondiente a los clientes
      }
    ];
    const spyGetUser = jest.spyOn(service, "getAllUsers").mockReturnValue(of(result));
    const component = fixture.componentInstance;
    component.getAllClients();
    expect(component.list.length).toBeGreaterThan(0);
    expect(component.list[0]?.type).toEqual(0);
  });

  it('should get only employees', () => {
    const fixture = TestBed.createComponent(UsersComponent);
    const service = TestBed.inject(UsersService);
    const result: any[] =   [
      {
        id_usuario: 1,
        nombre_usuario: "empleado",
        contraseña: "empleado",
        nombre: "empleado",
        apellido: "empleado",
        email: "empleado",
        telefono: "11111111",
        direccion: "empleado",
        tipo_usuario: 1 // 1 es el numero correspondiente a los empleados
      }
    ];
    const spyGetUser = jest.spyOn(service, "getAllUsers").mockReturnValue(of(result));
    const component = fixture.componentInstance;
    component.getAllEmployees();
    expect(component.list.length).toBeGreaterThan(0);
    expect(component.list[0]?.type).toEqual(1);
  });

  it('should set showClientsFlag to true', () => {
    const fixture = TestBed.createComponent(UsersComponent);
    const component = fixture.componentInstance;
    component.showOnlyClients();
    fixture.detectChanges();
    expect(component.showClientsFlag).toEqual(true) ;
    expect(component.showEmployeesFlag).toEqual(false);
  });

  it('should set showClientsFlag to false', () => {
    const fixture = TestBed.createComponent(UsersComponent);
    const component = fixture.componentInstance;
    component.showClientsFlag = true;
    component.showOnlyClients();
    fixture.detectChanges();
    expect(component.showClientsFlag).toEqual(false) ;
  });

  it('should set showEmployeesFlag to true', () => {
    const fixture = TestBed.createComponent(UsersComponent);
    const component = fixture.componentInstance;
    component.showOnlyEmployees();
    fixture.detectChanges();
    expect(component.showEmployeesFlag).toEqual(true);
    expect(component.showClientsFlag).toEqual(false);
  });

  it('should set showEmployeesFlag to false', () => {
    const fixture = TestBed.createComponent(UsersComponent);
    const component = fixture.componentInstance;
    component.showEmployeesFlag = true;
    component.showOnlyEmployees();
    fixture.detectChanges();
    expect(component.showEmployeesFlag).toEqual(false);
  });

  it('should allow to edit a user', () => {
    const fixture = TestBed.createComponent(UsersComponent);
    const component = fixture.componentInstance;
    const userToEditMock: User = {userName: "prueba", password: "prueba", 
      email: "prueba", phone: "prueba", firstName: "prueba", lastName: "prueba",
      adress: "prueba", idUser: 1, type: 1}
    component.allowEditing(userToEditMock);
    expect(component.edit).toEqual(true);
    expect(component.userForm.controls.username).toBeDefined();
    expect(component.userForm.enabled).toEqual(true);
  });

  it('should delete a user', () => {
    const fixture = TestBed.createComponent(UsersComponent);
    const service = TestBed.inject(UsersService);
    const userToDelete: User = new User(-1, "prueba", "prueba", "prueba", "prueba", "prueba 123", "00000000", 1, "prueba@gmail.com");
    const component = fixture.componentInstance;
    component.list.push(userToDelete);
    component.deleteUser(userToDelete);
    component.ngOnInit();
    expect(component.list.find(user => user.idUser === -1)).toBeUndefined();
  });

  it('should edit a user', () => {
    const fixture = TestBed.createComponent(UsersComponent);
    const service = TestBed.inject(UsersService);
    const component = fixture.componentInstance;
    const userToEdit: User = new User(-1, "prueba", "prueba", "prueba", "prueba", "prueba 123", "00000000", 1, "prueba@gmail.com");
    component.allowEditing(userToEdit);
    component.userForm.controls.username.setValue("modificado");
    component.editUser();
    expect(component.lastEditedUser?.userName).toEqual("modificado");
  });

  it('should create a user', () => {
    const fixture = TestBed.createComponent(UsersComponent);
    const service = TestBed.inject(UsersService);
    const component = fixture.componentInstance;
    component.userForm.patchValue({username: "prueba", password: "prueba", email: "prueba", phoneNumber: "00000000", firstName: "prueba", lastName: "prueba", address: "prueba 123", userType: "1"});
    component.addUser();
    expect(component.lastUserAdded?.userName).toEqual("prueba");
  });
});

# Angular

This directory is a brief example of an [Angular](https://angular.io/) app that can be deployed to Vercel with zero configuration.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.3.

## Deploy Your Own

Deploy your own Angular project with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/vercel/tree/main/examples/angular&template=angular)

_Live Example: https://angular-template.vercel.app_

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# comandos para iniciar proyect
start:stubby    iniciar el proyecto, solo con stubbys,el comando 
                levanta tanto el dront end como el servidor de stubby
start:local     inicia el proyecto, pero apuntando a los ms que deberian
                estar levantados en local tambien
start:dev       inicia elproyecto, apuntando al los servicios en ambiente de desarrollo


# request para crear orden
{
    "cliente": {
        "nombre": "Ronald gonzalez",
        "correo_electronico": "ra@fa.cl",
        "celular": "4444",
        "regionId": "1",
        "comunaId": "1"
    },
    "vehiculo": {
        "patente": "dkdk39",
        "marca": "1",
        "modelo": "Q2",
        "anio": 2020,
        "vin": "aaaaaappppp1234m",
        "repuestos": [ // puede ser mas de 1repuesto
            {
                "categoria": "Motor y Transmisión",
                "subcategoria": "Partes del Motor",
                "nombreRepuesto": "correa de distribucion",
                "foto": ""
            }
        ]
    }
}


# http://localhost:4200/estadoSolicitud/128 funcion para buscar una solicitud como cliente
# http://localhost:4200/creacionOferta/128 funcion para buscar una solicitud como proveedor

celular es con +56956400785
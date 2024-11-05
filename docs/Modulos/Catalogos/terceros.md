# Terceros

## Qué es un tercero

Un tercero es cualquier entidad o individuo que participa en el proceso de transporte de carga. Esto incluye clientes, transportadores, conductores, propietarios de vehículos, entre otros.

## Información que contiene

- Datos de identificación (NIT, cédula)
- Nombre completo o razón social
- Dirección y datos de contacto
- Rol en el proceso de transporte
- Información fiscal y bancaria (si aplica)

## Cómo se usa

1. Se accede al módulo de Terceros desde el menú principal.
2. Se pueden agregar nuevos terceros o editar los existentes.
3. Al crear remesas o viajes, se seleccionan los terceros correspondientes de esta base de datos.
4. La información de terceros se sincroniza con el RNDC para asegurar su validez en los procesos oficiales.

### Creación de tercero 

| Nombre de campo | Requerido | Descripción |
| --------------- | --------- | ----------- |
| Tipo de tercero |    si     | Persona o institución que se relaciona con la empresa|
| Tipo de documento |  no     | Tipo de documento con el que se relacione el tercero |
| Número de documento | no    | Número de docuemtno del tercero |
| Nombre o razón social | si  | Nombre o razon social de tercero |  
| Apellido |      no          | Apellido del tercero |
| Segundo Apellido| no        | Segundo apellido del tercero 



### Sucursal 

| Nombre de campo | Requerido | Descripción |
| --------------- | --------- | ----------- |
| Código de sucursal |   no   | Consecutivo asignado a la sucursal |
| Nombre de sucusal |  no     | Nombre de a sucursal 
| Número de contacto |  si    | Numero de contacto de sucursal |
| Celular |       no          | Numero celular de contacto de sucursal |
| Dirección | si              | Direccion de la sucursal |
| Departamento | si           | Departamento donde se ubica la sucursal 
| Latitud | no                | Latitud de ubicacion de sucursal |
| Longitud | no               | Longitud de ubicacion de sucursal 
| Régimen simple | no         | Marcar solo si el tercero pertenece al régimen simple |


### Información contable 

| Nombre de campo | Requerido | Descripción |
| --------------- | --------- | ----------- |
| Aplica retencion en la fuente | no | Marcar solo si el tercero aplica retención en la fuente|
| Aplica ICA | no | Marcar solo si el tercero aplica ICA|
| Aplica contrao de mandato | no | Marcar solo si el tercero aplica contrato de mandato |
| Tipo de contrubuyente | no | persona natural o jurídica |
| Régimen de impuestos | no | Régimen de impustos al que pertenece el tercero |
| Responsabilidad fiscal/tributaria | no | Responsabilidad fiscal/tributaria al que pertenece el tercero|
| Actividad económica | no | Actividad económica del tercero |
| Correo electronicp | no | correo electronico del tercero 
| Código postal | no | codigo postal del tercero |
| Nombre responsable documentos electrónicos | no | nombre de responsablede de documentos electronicos de tercero 
| Correo respnsable documentos electrónicos | no | correo de responsable de documentos electronicos de tercero |
| Teléfono responsable documentos electrónicos | no| telefono de responsable de documentos electronicos de tercero |
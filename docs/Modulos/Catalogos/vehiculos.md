# Vehículos

## Qué es un vehículo en el sistema

Un vehículo es cualquier medio de transporte utilizado para el traslado de carga, que puede ser un camión o un trailer.

## Información que contiene

- Placa y número de identificación
- Tipo de vehículo (camión, trailer)
- Capacidad de carga
- Información técnica (marca, modelo, año)
- Datos del propietario
- Documentación legal (SOAT, revisión técnico-mecánica)

## Cómo se usa

1. Se accede al módulo de Vehículos desde el menú de Catálogos.
2. Se pueden registrar nuevos vehículos o actualizar la información de los existentes.
3. Al crear un viaje, se selecciona el vehículo de esta base de datos.
4. La información de vehículos se valida con el RNDC para asegurar su conformidad legal.

### Creación de vehículos y remolques

| Nombre del campo | Requerido | Descripción |
|------------------| ----------| ---------- |
| Placa |  si      | Combinación de letras, números y/o caracteres que identifican el vehículo 
| Es propio | no   | Marcar solo si el vehículo es propio |
| Configuración | si | Tipo de vehículo |
| Marca | no | Marca de vehículo 
| Año del modelo | no | Año del vehículo 
| Peso vacío | si | Peso propio del vehículo sin carga
| Carrocería | si | Tipo de estructura externa del vehículo 
| Tipo de combustible | no | Tipo de combustible del vehículo 

### Información del SOAT

| Nombre del campo | Requerido | Descripción |
|------------------| ----------| ---------- |
| Número de póliza | no        | Combinación de letras, números y/o caracteres de póliza del soat del vehículo 
| Vencimiento | no             | Fecha de vencimiento del soat
| Aseguradoras | no            | Aseguradora del vehículo 

### Informacipon del propietario 

| Nombre del campo | Requerido | Descripción |
|------------------| ----------| ---------- |
| Tipo de documento | si       | Tipo de documento del propietario del vehículo 
| Número de documento | si | Combinación de letras, números y/o caracteres del documento del propietario del vehículo 
| tercero | si                 | Nombre del tercero (debe estar registrado previamente en terceros)

#### Informacipon del Tenedor

| Nombre del campo | Requerido | Descripción |
|------------------| ----------| ---------- |
|Tipo de documento | si        |Tipo de documento del tenedor del vehículo 
| Número de documento |si      | Combinación de letras, números y/o caracteres del documento del tenedor del vehículo 
| Tercero | si                 | Nombre del tercero (debe estar registrado previamente en terceros)
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

| Nombre del campo | Requerido | Descrpción |
|------------------| ----------| ---------- |
| Placa |  si      | Combinación de caracteres alfabéticos y/o numéricos que identifican el vehiculo 
| Es propio | no   | Marcar solo si el vehiculo es propio |
| Configuración | si | Tipo de vehiculo |
| Marca | no | Marca de vehiculo 
| Año del modelo | no | Año del vehiculo 
| Peso vacío | si | Peso propio del vehiculo sin carga
| Carrocería | si | Tipo de estructura externa del vehiculo 
| Tipo de combustibe | no | tipo de combustible del vehiculo 

### Información del SOAT

| Nombre del campo | Requerido | Descrpción |
|------------------| ----------| ---------- |
| Número de poliza | no        | Combiacion de caracteres alfabeticos y/o números de póliza del soat del vehiculo 
| Vencimiento | no             | Fecha de vvencimiento del SOAT
| Aseguradoras | no            | Aseguradora del vehiculo 

### Informacipon del propietario 

| Nombre del campo | Requerido | Descrpción |
|------------------| ----------| ---------- |
| Tipo de documento | si       | Tipo de documento del propietario del vehiculo 
| Número de documento | si | Combiacion de caracteres alfabeticos y/o números del documento del propietario del vehiculo 
| tercero | si                 | nombre del tercero (debe estar registrado en terceros)

#### Informacipon del Tenedor

| Nombre del campo | Requerido | Descrpción |
|------------------| ----------| ---------- |
|Tipo de documento | si        |tipo de documento del tenedor del vehiculo 
| Número de documento |si      | Combiacion de caracteres alfabeticos y/o números del documento del tenedor del vehiculo 
| Tercero | si                 | nombre del tercero (debe estar registrado en terceros)
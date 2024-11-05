# Rutas

## Qué es una ruta

Una ruta es el trayecto que sigue un vehículo desde su origen hasta su destino, incluyendo posibles paradas intermedias.

## Información que contiene

- Punto de origen y destino
- Paradas intermedias
- Distancia total
- Tiempo estimado de viaje
- Peajes y costos asociados

## Cómo se usa

1. Se accede al módulo de Rutas desde el menú de Catálogos.
2. Se pueden crear nuevas rutas o modificar las existentes.
3. Al planificar un viaje, se selecciona la ruta correspondiente.
4. Las rutas ayudan a calcular tiempos y costos estimados para los viajes.

## Creación de ruta

### Origen  

| Nombre de campo | Requerido | Descripción |
| --------------- | --------- | ----------- |
| Departamento | si | Departamento de origen de la ruta|
| Municipio | si | Municipio de origen de la ruta|

### Destino 

| Nombre de campo | Requerido | Descripción |
| --------------- | --------- | ----------- |
| Departamento | si | Departamento de destino de la ruta|
| Municipio | si | Municipio de destino de la ruta|

### Paradas 

| Nombre de campo | Requerido | Descripción |
| --------------- | --------- | ----------- |
| Departamento | no | departamento de parada de la ruta |
| Municipio | no | Municipio de parada de la ruta|
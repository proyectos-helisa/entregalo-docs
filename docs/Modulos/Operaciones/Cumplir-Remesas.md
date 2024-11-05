# Cumplir remesas 

Registrar información detallada del cumplido de la remesa seleccionada 

### Tipo cumplido y cantidades 

Si la remesa se cumplió: 

| Nombre del campo | Requerido | Descripción | 
| ---------------- | --------- | ----------- |
| Tipo de cumplido remesa | si | Indicar si la remesa seleccionada se cumplió o se suspendió |
| Unidad de medida |   no      | Indicar la unidad de medida de la remesa seleccionada |
| Cantidad cargada | no        | Ingresar valor numérico de la cantidad cargada de la remesa |
| Cantidad entregada | no      | Ingresar valor numérico de la cantidad entregada de la remesa |


Si la remesa se suspendió: 

| Nombre del campo | Requerido | Descripción | 
| ---------------- | --------- | ----------- |
| Tipo de cumplido remesa | si | Indicar si la remesa seleccionada se cumplió o se suspendió |
| Razón de suspendió | no    | Seleccione la razón por la que la remesa se suspendió |
| Unidad de medida | no        | Indicar la unidad de medida de la remesa seleccionada |
| Cantidad cargada | no        | Ingresar valor numérico de la cantidad cargada de la remesa |
| Cantidad entregada |  no     | Ingresar valor numérico de la cantidad entregada de la remesa |

### Tiempos logísticos en origen (Cargue)

| Nombre del campo | Requerido | Descripción | 
| ---------------- | --------- | ----------- |
| Fecha de llegada | si        | Indicar fecha de llegada |
| Horas y minutos | si | Ingresar horas y minutos de la llegada de la carga |
| Fecha de entrada | si | Indicar fecha de entrada | 
| Horas y minutos | si | Ingresar horas y minutos de la entrada de la carga |
| Fecha de salida | si | Ingresar fecha de salida |
|  Horas y minutos | si | Ingresar horas y minutos de la salida de la carga |
| Observaciones | no | Ingresar texto de observaciones del cumplimiento/suspensión de la carga |

### Tiempos logísticos en destino (Descargue)

Solo debe ser visible si la remesa se cumplió 

| Nombre del campo | Requerido | Descripción | 
| ---------------- | --------- | ----------- |
| Fecha de llegada | si | Indicar fecha de llegada |
| Horas y minutos | si | Ingresar horas y minutos de la fecha de llegada 
| Fecha de entrada | si | Indicar fecha de entrada | 
| Horas  minutos | si | Ingresar horas y minutos de la fecha de entrada |
| Fecha de salida | si | Indicar fecha de salida|
| Horas  minutos | si | Ingresar horas y minutos de la fecha de salida | 
| Observaciones | no | Ingresar texto de observaciones del cumplimiento/ suspensión de la carga 


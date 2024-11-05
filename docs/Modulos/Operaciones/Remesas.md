# Remesas

Una remesa es un registro detallado de la carga que será transportada. Este módulo es crucial para cumplir con los requisitos del Registro Nacional de Despacho de Carga (RNDC) para viajes intermunicipales.

## Información que contiene una remesa

- Datos del remitente y destinatario
- Descripción detallada de la carga (tipo, peso, volumen)
- Lugar de origen y destino
- Fechas estimadas de carga y entrega
- Valor declarado de la mercancía
- Información sobre seguros (si aplica)

## Flujo de trabajo con remesas

1. Creación de la remesa: Se ingresa toda la información requerida.
2. Estado PENDIENTE: La remesa se guarda en la base de datos y puede ser editada.
3. Envío al RNDC: Una vez verificada, la remesa se envía al RNDC.
4. Estado REGISTRADO: Confirmación de registro exitoso en el RNDC. Ya no se puede modificar.
5. Estado COMPLETADO: Se actualiza con los tiempos reales de carga y descarga.
6. Estado CANCELADO: En caso de anulación, se registra en el RNDC.

## Creación de la remesa 

Registro detallado de la carga a transportar. 
Al finalizar se guarda como un borrador que puede ser editado mientras esta en estado pendiente (sin estar registrado a un viaje / manifiesto).

### Características de la mercancía 

| Nombre del campo | Requerido | Descripción |
| ---------------- | --------- | ----------- |
| Consecutivo de la remesa | si | Combinación de caracteres, letras y/o números únicos de la remesa a registrar |
| Valor de la remesa |  si       | Valor en pesos de la remesa a registrar |
| Tipo de operación | no        | Tipo de operación de la remesa |
| Tipo de empaque | no | Tipo de empaque de la carga |

### Características del producto 

| Nombre del campo | Requerido | Descripción |
| ---------------- | --------- | ----------- |
| Naturaleza de la carga | no  | Naturaleza de la carga |
| Descripción corta del producto | no | Descripción corta de producto| 
| Cantidad de carga | si | Cantidad de la carga (valor numérico) |
| Unidad de medida | no | Unidad de medida de la cantidad de carga |

### Propietario de la carga / Generador de carga / Contratante 

| Nombre del campo | Requerido | Descripción |
| ---------------- | --------- | ----------- |
| Tipo de documento | si       | Tipo de documento del propietario de la carga |
| Número de documento | si     | Combinación de caracteres, letras y/o números del documento del propietario de la carga |
| Sedes | si | Sede de carga del propietario de la carga (El propietario de la carga debe estar registrado previamente en terceros para acceder a las sedes registradas) |

### Remitente: Sitio de cargue 


| Nombre del campo | Requerido | Descripción |
| ---------------- | --------- | ----------- |
| Tipo de documento | si       | Tipo de documento del remitente de la carga |
| Número de documento | si     | Combinación de caracteres, letras y/o números del documento del remitente de la carga |
| Sedes | si | Sede de cargue del remitente de la carga (El remitente de la carga debe estar registrado previamente en terceros para acceder a las sedes registradas ) |

### Remitente: Sitio de descargue

| Nombre del campo | Requerido | Descripción |
| ---------------- | --------- | ----------- |
| Tipo de documento | si       | Tipo de documento del destinatario de la carga |
| Número de documento | si     | Combinación de caracteres, letras y/o números del documento del destinatario de la carga |
| Sedes | si | Sede de descargue del destinatario de la carga (El destinatario de la carga debe estar registrado previamente en terceros para acceder a las sedes registradas ) |

### Póliza

| Nombre del campo | Requerido | Descripción |
| ---------------- | --------- | ----------- |
| Dueño de la póliza |   si    | Indicar el dueño de la póliza de la carga |
| Número de la póliza | no     | Combinación de caracteres, letras y/o números de la póliza de la carga |
| Fecha de Expiración | no | Fecha de expiración de la póliza |
| Aseguradoras | no | Indicar la aseguradora |

### Tiempos pactados de cargue 

| Nombre del campo | Requerido | Descripción |
| ---------------- | --------- | ----------- |
| Fecha de la cita | si        | Indicar fecha de la cita de cargue | 
| Horas y minutos | si | Ingresar horas y minutos pactados de la fecha de la cita del cargue |
| Horas y minutos de cargue | si  | Ingresar horas y minutos de tiempo de cargue pactado de la remesa |


### Tiempos pactados de descargue 

| Nombre del campo | Requerido | Descripción |
| ---------------- | --------- | ----------- |
| Fecha de la cita | si        | Indicar fecha de la cita de descargue | 
| Horas y minutos | si | Ingresar horas y minutos pactados de la fecha de la cita del descargue |
| Horas y minutos de cargue | si  | Ingresar horas y minutos de tiempo de descargue pactado de la remesa |

### Tiempos logísticos en cargue (si ya se realizó el cargue)

| Nombre del campo | Requerido | Descripción |
| ---------------- | --------- | ----------- |
| Fecha de llegada |  no       | Fecha de llegada para el cargue |
| Horas y minutos | no | Ingresar horas y minutos que requirió el cargue |
| Fecha de entrada | no | Fecha de entrega para el cargue |
| Horas y minutos | no | Ingresar horas y minutos de entrada para el cargue |
| Fecha de salida | no | Fecha de salida del cargue| 

### Observaciones

| Nombre del campo | Requerido | Descripción |
| ---------------- | --------- | ----------- |
| Observaciones | no | Ingresar texto de observación relacionado a la información registrada | 
# Licencias

## Creación de licencia


<details>
  <summary>Codigo base del diagrama</summary>

  ```js
  title Regsitro de la licencia

    Cliente->Aplicacion: Registro de licencia
    Aplicacion->BD: Valida informacion.
    alt informacion correcta
        Aplicacion->Cliente: Licencia creada
        Aplicacion->BD: Crea la licencia
    else informacion incorrecta
        Aplicacion->Cliente: Los datos no son validos
    end
  ```
</details>

![diagrama crear licencia](../static/licencias/crear%20licencia.png)
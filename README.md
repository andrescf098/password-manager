# Password Manager

## Instalación y Ejecución

### 1. **Instalar dependencias**

Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema. Luego, ejecuta el siguiente comando en la raíz del proyecto para instalar las dependencias:

```bash
npm install
```

### 2. **Configurar variables de entorno**

El archivo `.env.example` en el proyecto proporciona un ejemplo de las variables de entorno necesarias. Cópialo y renómbralo como `.env`:

```bash
cp .env.example .env
```

Luego, edita el archivo `.env` con los valores correctos para tu entorno. Asegúrate de configurar correctamente las variables relacionadas con la base de datos, autenticación, y cualquier otra configuración requerida.

La aplicación hace uso del módulo uploadthing, se requiere tener un usuario en [https://uploadthing.com/] para las credenciales requeridas.

### 3. **Ejecutar la aplicación en modo desarrollo**

Para iniciar el servidor en modo desarrollo, utiliza el siguiente comando:

```bash
npm run dev
```

Esto ejecutará el servidor de desarrollo de Next.js con soporte para Turbopack.

### 4. **Construir y ejecutar en producción**

Si deseas ejecutar la aplicación en un entorno de producción, primero construye el proyecto:

```bash
npm run build
```

Luego, inicia el servidor de producción:

```bash
npm start
```

### 5. **Verificar la aplicación**

Una vez que el servidor esté en ejecución, abre tu navegador y accede a la URL que se muestra en la terminal (por defecto, suele ser `http://localhost:3000`).

Si necesitas más detalles sobre las variables de entorno específicas, revisa el archivo `.env.example` en la raíz del proyecto.

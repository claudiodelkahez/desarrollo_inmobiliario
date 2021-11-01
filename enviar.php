<?php
    $destino= "miemail@email.com";
    $nombre= $_Post["nombre"];
    $correo= $_Post["correo"];
    $telefono= $_Post["telefono"];
    $mensaje= $_Post["mensaje"];

    $contenido= "Nombre: " . $nombre . "\nCorreo: " . $correo ."Telefono: " . $telefono . "\nMensaje: " . $mensaje;
    mail($destino, "Contacto",$contenido);
    header("Location: gracias.html");

?>
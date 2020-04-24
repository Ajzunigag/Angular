import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "src/services/upload.service";
import { Global } from "src/services/global";
import { Archivo } from "src/models/Archivo";

@Component({
  selector: "app-upload-file",
  templateUrl: "./upload-file.component.html",
  styleUrls: ["./upload-file.component.css"],
  providers: [ApiService]
})
export class UploadFileComponent implements OnInit {
  public archivo: Archivo;
  public archivosServer: Archivo;
  public lastPK: number;

  constructor(private _service: ApiService) {}

  subirArchivo(archivo: Archivo) {
    this._service.uploadFile(this.archivo).subscribe(Response => {});
  }

  fileEvent(fileInput: Event) {
    let file = (<HTMLInputElement>fileInput.target).files[0];

    if (file.type == "image/jpeg" || file.type == "image/png") {
      this.archivo = new Archivo(this.lastPK + 1, file.name, file.type);
    }
  }

  ngOnInit(): void {
    this._service.getUploads().subscribe(Response => {
      this.archivosServer = Response;
      this.lastPK = this.archivosServer[Response.length - 1].id;
    });
  }
}

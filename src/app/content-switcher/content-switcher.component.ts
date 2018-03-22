import { Component, OnInit } from "@angular/core";

interface Content {
  title: string;
  content: string;
}

@Component({
  selector: "app-content-switcher",
  templateUrl: "./content-switcher.component.html",
  styleUrls: ["./content-switcher.component.css"]
})
export class ContentSwitcherComponent implements OnInit {
  content: Array<Content> = [
    {
      title: "First Section",
      content: `En Minsait ofrecemos la combinación de negocio y tecnología que te permite alcanzar el impacto que estás buscando,
     con una visión extremo a extremo, desde la estrategia hasta la ejecución del plan`
    },
    {
      title: "Second Section",
      content:
        `Minsait Way: nuestra forma de abordar proyectos end to end, con un alto nivel de especialización pero trabajando unidos`
    },
    {
      title: "Third Section",
      content: `Indra es una de las principales compañías globales de tecnología
     y consultoría y el socio tecnológico para las operaciones clave de los negocios de sus clientes en todo el mundo`
    }
  ];

  actualContent: string;

  constructor() {}
  handleSections = index => (this.actualContent = this.content[index].content);

  ngOnInit() {}
}

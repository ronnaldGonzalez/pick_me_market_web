import { Component, OnInit, EventEmitter, Output,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import repuestosJson from '../../../assets/json/repuestos.json'; // JSON con las categorías y subcategorías
import { Categoria, CategoriasResponse, Repuesto } from '../../../assets/interfaces';

@Component({
  selector: 'app-repuestos-form',
  templateUrl: './repuestos-form.component.html',
  styleUrls: ['./repuestos-form.component.css']
})
export class RepuestosFormComponent implements OnInit {
  repuestoForm!: FormGroup; // Asegúrate de que es el nombre correcto del FormGroup
  categorias: Categoria[] = [];
  subcategorias: string[] = [];
  listaRepuestos: Repuesto[] = [];
  isSubmitButtonDisabled: boolean = true;
  @Output() repuestoAdded = new EventEmitter<Repuesto>();
  @Output() enviarOrden = new EventEmitter<any[]>();
  @Input() disableButtonSubmit: boolean = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.cargarCategorias();
    
    this.repuestoForm = this.fb.group({
      categoria: ['', Validators.required],
      subcategoria: ['', Validators.required],
      nombreRepuesto: ['', Validators.required],
      foto: ['']
    });
  }

  cargarCategorias() {
    this.categorias = (repuestosJson as CategoriasResponse).Segmentación;
  }

  onCategoriaChange(event: Event) {
    const categoria = (event.target as HTMLSelectElement).value; // Obtener el valor de la categoría seleccionada
    const selectedCategoria = this.categorias.find(c => c.Categoria === categoria);
    this.subcategorias = selectedCategoria ? selectedCategoria['Sub categoria'] : [];
    this.repuestoForm.get('subcategoria')?.setValue(''); // Limpiar el campo de subcategoría
  }

  agregarRepuesto() {
    if(this.repuestoForm.valid){
      const nuevoRepuesto: Repuesto = {
        categoria: this.repuestoForm.get('categoria')?.value,
        subcategoria: this.repuestoForm.get('subcategoria')?.value,
        nombreRepuesto: this.repuestoForm.get('nombreRepuesto')?.value,
        foto: this.repuestoForm.get('foto')?.value
      };
      this.listaRepuestos.push(nuevoRepuesto);
      this.repuestoAdded.emit(nuevoRepuesto); 
      this.isSubmitButtonDisabled = false;
      console.log('addrepuesto')
      this.repuestoForm.reset(); // Limpia el formulario
  
      const fileInput = document.getElementById('file') as HTMLInputElement;
      if (fileInput) {
        fileInput.value = ''; // Limpiar el valor del campo file
      }

    }
    }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];

      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target?.result as string;

        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          const MAX_WIDTH = 800; // Establece el tamaño máximo que desees
          const MAX_HEIGHT = 800;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;

          ctx?.drawImage(img, 0, 0, width, height);
          
          const compressedImage = canvas.toDataURL('image/jpeg', 0.7); // Comprime la imagen a 70% calidad
          this.repuestoForm.get('foto')?.setValue(compressedImage);
        };
      };
      reader.readAsDataURL(file);
    }
  }


  onSubmit(){
    if(this.listaRepuestos.length > 0 ){
      this.enviarOrden.emit();
    }
  }

  get categoria() {
    return this.repuestoForm.get('categoria');
  }

  get subcategoria() {
    return this.repuestoForm.get('subcategoria');
  }
}

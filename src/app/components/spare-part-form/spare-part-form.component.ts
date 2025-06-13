import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import repuestosJson from '../../../assets/json/repuestos.json'; // JSON con las categorías y subcategorías
import { Categoria, CategoriasResponse, Repuesto } from '../../../assets/interfaces';
import { StoreService } from '../../services/store.service';
@Component({
  selector: 'app-spare-part-form',
  templateUrl: './spare-part-form.component.html',
  styleUrls: ['./spare-part-form.component.css']
})
export class SparePartFormComponent implements OnInit {
  spareForm!: FormGroup;
  categorias: Categoria[] = [];
  subcategorias: string[] = [];
  spares: Repuesto[] = [];

  constructor(private fb: FormBuilder, private store: StoreService) {}

  ngOnInit(): void {
    this.createForm();
    this.loadData();
  }

  onCategoriaChange(event: Event) {
    const categoria = (event.target as HTMLSelectElement).value;
    const selectedCategoria = this.categorias.find(c => c.Categoria === categoria);
    this.subcategorias = selectedCategoria ? selectedCategoria['Sub categoria'] : [];
    this.spareForm.get('subcategoria')?.setValue('');
  }

  saveSparePart(){
    if(this.spareForm.valid){
      const newSpare: Repuesto = this.spareForm.value;
      this.spares.push(newSpare);
      this.store.repuestos = this.spares;
      this.spareForm.reset();
  
      const fileInput = document.getElementById('file') as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }

    }
  }

  loadData() {
    this.categorias = (repuestosJson as CategoriasResponse).Segmentación;
  }

  createForm() {
    this.spareForm = this.fb.group({
      categoria: ['', Validators.required],
      subcategoria: ['', Validators.required],
      nombreRepuesto: ['', Validators.required],
      foto: ['']
    });
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

          const MAX_WIDTH = 800;
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
          this.spareForm.get('foto')?.setValue(compressedImage);
        };
      };
      reader.readAsDataURL(file);
    }
  }

  get categoria() {
    return this.spareForm.get('categoria');
  }

  get subcategoria() {
    return this.spareForm.get('subcategoria');
  }
}

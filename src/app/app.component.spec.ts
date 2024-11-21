import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('CardsComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display products fetched from ProductsService', () => {
    const productElements = fixture.debugElement.queryAll(By.css('.name'));
    expect(productElements.length).toBe(3); // Verifica se os 3 produtos foram renderizados
    const productNames = productElements.map(el => el.nativeElement.textContent.trim());
    expect(productNames).toEqual(['Nike Air Max 90', 'Nike Air Force 270', 'Nike Air Force']);
  });

  it('should have a button with the correct initial background color', () => {
    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    const style = getComputedStyle(buttonElement);
    expect(style.backgroundColor).toBe('rgb(255, 0, 0)'); // Verifica se a cor de fundo é vermelha
  });

  it('should render the H2 with text "The insole are confortable so you can wear them everyday"', () => {
    const h2Element = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(h2Element.textContent.trim()).toBe('The insole are confortable so you can wear them everyday');
  });

  it('should render a P tag with the correct text for the product description', () => {
    const descriptionElements = fixture.debugElement.queryAll(By.css('.description'));
    const descriptions = descriptionElements.map(el => el.nativeElement.textContent.trim());
    expect(descriptions).toEqual([
      'The insole are confortable so you can',
      'The insole are confortable so you can',
      'The insole are confortable so you can',
    ]);
  });
});
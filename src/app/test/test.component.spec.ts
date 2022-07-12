import { ComponentFixture, TestBed } from '@angular/core/testing';
//import { compute ,greet ,getCurrencies,SumComponent ,VoteComponent,NameComponent}from './test.component';

import { TestComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


/*

fdescribe('SumComponent',()=>{
  let component =new SumComponent();
  it('Testing html ',()=>{
     expect(component.sum(30,40)).toBe(70);
    
  })
});

describe('SumComponent',()=>{
  let component =new SumComponent();
  it('Testing sum function',()=>{
     expect(component.sum(30,40)).toBe(70);
    
  })
});



describe('NameComponent',()=>{
  let component =new NameComponent();
  it('Testing title',()=>{
     expect(component.title).toBe("user");
    
  })
});


describe('VoteComponent',()=>{
     
    //Arrange
    let component =new VoteComponent();

  it('should increment totalVotes when upvoted',()=>{

    //Act
    component.upVote();

    //Assert
    expect(component.totalVotes).toBe(1);

  });

  it('should decrement totalVotes when downvoted',()=>{
     
      //Act
      component.downVote();

      //Assert
      expect(component.totalVotes).toBe(0);

    })

  
});


describe('compute',()=>{
  it('should return  0 if input is nagative',()=>{
      const result =compute(1);
      expect (result).toBe(2);
  })
})

describe('greet',()=>{
  it('should include the name in the message',()=>{
     
      expect (greet('isuru')).toContain('isuru');
  })
});


describe('getCurrencies',()=>{
  it('should return the supported currencies',()=>{
     
    //  expect (getCurrencies('isuru')).toContain('usd');
     // expect (getCurrencies('isuru')).toContain('aud');
     // expect (getCurrencies('isuru')).toContain('eur');
  })
});

*/
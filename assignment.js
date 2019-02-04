
class Author{

constructor(firstName , lastName){
this.firstName=firstName;
this.lastName-lastName;
}
  
}


class Book{

constructor(isbn, title, numberOfPages){
    this.isbn=isbn;
    this.title=title;
    this.numberOfPages=numberOfPages;
} 
}

class Library{

constructor(numOfCard){
this.numOfCard=numOfCard;
const ar=[];
}

addBook(ar,value){
    if (ar instanceof Array){
       ar.push(value);
    }
    return console.error("it is't Array")

}

removeBook(ar,value){
        if(ar instanceof Array)
        ar.pop(value);
    
    }

}

ArrBook=[{asbn:23,title:'How to learn Java',numberOfPages:300,firstName:'jack',lastName:'smoth',numOfCard:21}
,{asbn:12,title:'C++',numberOfPages:120,firstName:'smoth',lastName:'sam',numOfCard:23}];

 w =new Library(234);

w.addBook(ArrBook,{asbn:32,title:'C++',numberOfPages:345,firstName:'smoth',lastName:'hhh'});
//console.log(ArrBook);
s=new Library(21);
s.removeBook(ArrBook,{asbn:23,title:'How to learn Java',numberOfPages:300,firstName:'jack',lastName:'smoth',numOfCard:21});
console.log(ArrBook);






# My Angular 4 up-skilling: Reddit-Clone App 
*Based on the lessons from the NG-Book by Nate Murray et al. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.3.*
___
My learning lessons from this project:

1. Contract Definition with TypeScript
2. Bind Inputs to Values
3. Understand The Component Host
4. Initiate Component Properties
5. Prevent Click Propagation
6. Define Data Structures with Models
___

## 1. Contract Definition with TypeScript
Typescript helps us define the type of parameters we can expect to receive in our click-event-triggered function. Notice how helpful it is for a developer to understand where the parameters should come from. **Title** and **Link** are the parameters we have defined and as we can see in the contract, **they should always be of type: HTMLInputElement**, ie coming from our HTML input form inside the relevant view. 
```typescript
addNewArticle( title: HTMLInputElement, link: HTMLInputElement)
```

## Binding Inputs to Values

Having defined our function's parameters, we need to find a way to capture whatever we type into the form’s input fields. As any other programming paradigm, we do this by capturing the input into a special kind of local variable called: **a template variable**.

```html
<input name="title" #newTitle >
```

The hashtag syntax (#newTitle) of the template variable is called a **resolve**. The effect of the resolve is to make our new variable(newTitle) available to any expression within our view **hence local not global**

Our template variable is actually an **object** and as such it contains a .type property which we have defined to be of type HTMLInpuElement and a **.value property in which we can now find the value of whatever we type into the html input: newTitle.value**



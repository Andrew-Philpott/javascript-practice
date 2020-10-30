import { SetClass, SetFunction, SetClosure } from "./set";
import { QueueClass, QueueFunction, QueueClosure } from "./queue";
import { StackClass, StackFunction, StackClosure } from "./stack";

const setFunc = new SetFunction();
setFunc.add(1);
console.log(setFunc.collection);
const setClass = new SetClass();
setClass.add(2);
console.log(setClass.collection);
const setClosure = SetClosure;
setClosure.add(1);
setClosure.add(2);
console.log(setClosure.collection);

const queueFunc = new QueueFunction();
queueFunc.enqueue(1);
console.log(queueFunc.collection);
const queueClass = new QueueClass();
queueClass.enqueue(2);
console.log(queueClass.collection);
const queueClosure = QueueClosure;
queueClosure.enqueue(1);
queueClosure.enqueue(2);
console.log(queueClosure.collection);

const stackFunc = new StackFunction();
stackFunc.push(1);
console.log(stackFunc.collection);
const stackClass = new StackClass();
stackClass.push(2);
console.log(stackClass.collection);
const stackClosure = StackClosure;
stackClosure.push(3);
console.log(stackClosure.peek());
console.log(stackClosure.collection);

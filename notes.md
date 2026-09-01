# PainPoint
JavaScript runs one tast at a time.
While one task is running, no other javaScript code can run untill the first tasks finishes this type of operations is known as **synchronous**
JS runs on a single thread - one line of code executes at a time, not true parallelism.

# Asynchronous Programming
It solves this problem by allowing long-running operations to complete in the background while JavaScript continues running other code.

**Async** means not at the same time.

## Promise
A promise represents the future result of an asynchronous operation.
It acts as a placeholder for a value that is not available yet.

**Promise State**
 - Pending: The operation has started but not yet finished.
 - Fulfilled: The operation completed successfully
 - Rejected: The operation failed.

Pending
|
|_____ Fulfilled
|
|_____ Rejected

**A Promise is settled when it is fulfilled or rejected**

Many JavaScript APIs return Promises
The **fetch()** method is one example
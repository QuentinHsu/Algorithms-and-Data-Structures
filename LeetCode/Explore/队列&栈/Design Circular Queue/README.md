# Design Circular Queue

## 题目

```
EN:
Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".

One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.

Your implementation should support following operations:

MyCircularQueue(k): Constructor, set the size of the queue to be k.
Front: Get the front item from the queue. If the queue is empty, return -1.
Rear: Get the last item from the queue. If the queue is empty, return -1.
enQueue(value): Insert an element into the circular queue. Return true if the operation is successful.
deQueue(): Delete an element from the circular queue. Return true if the operation is successful.
isEmpty(): Checks whether the circular queue is empty or not.
isFull(): Checks whether the circular queue is full or not.
```

```
ZH:
设计你的循环队列实现。 循环队列是一种线性数据结构，其操作表现基于 FIFO（先进先出）原则并且队尾被连接在队首之后以形成一个循环。它也被称为“环形缓冲器”。

循环队列的一个好处是我们可以利用这个队列之前用过的空间。在一个普通队列里，一旦一个队列满了，我们就不能插入下一个元素，即使在队列前面仍有空间。但是使用循环队列，我们能使用这些空间去存储新的值。

你的实现应该支持如下操作：

MyCircularQueue(k): 构造器，设置队列长度为 k 。
Front: 从队首获取元素。如果队列为空，返回 -1 。
Rear: 获取队尾元素。如果队列为空，返回 -1 。
enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
isEmpty(): 检查循环队列是否为空。
isFull(): 检查循环队列是否已满。
```

[LeetCode - Design Circular Queue](https://leetcode-cn.com/problems/design-circular-queue)

## 题解

### 1st Attempt

```JavaScript
/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.list = new Array(k);   // 创建一个长度为 k 的空数组
    this.front = 0;             // 保存头部指针位置
    this.real = 0;              // 保存尾部指针位置
    this.max = k;               // 保存该数组最大长度，k
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
// enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
MyCircularQueue.prototype.enQueue = function(value) {
    if (!this.isFull()) {
        this.list[this.real] = value
        this.real = (this.real + 1) % this.max
        return true
    } else {
        return false
    }
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
// deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
MyCircularQueue.prototype.deQueue = function() {
    if (!this.isEmpty()) {
        this.list[this.front] = ''
        this.front = (this.front + 1) % this.max
        return true
    } else {
        return false
    }
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
// Front: 从队首获取元素。如果队列为空，返回 -1 。
MyCircularQueue.prototype.Front = function() {
    if ( this.isEmpty() ) {
        return -1
    }
    return this.list[this.front]
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
// Rear: 获取队尾元素。如果队列为空，返回 -1 。
MyCircularQueue.prototype.Rear = function() {
    if ( this.isEmpty() ) {
        return -1
    }
    let val = this.real - 1 >= 0 ? this.real - 1 : this.max - 1
    return this.list[val]
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
// isEmpty(): 检查循环队列是否为空。
MyCircularQueue.prototype.isEmpty = function() {
    if ( this.real === this.front && !this.list[this.front]) {
        return true
    } else {
        return false
    }
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
// isFull(): 检查循环队列是否已满。
MyCircularQueue.prototype.isFull = function() {
    if ( this.real === this.front && !!this.list[this.front]) {
        return true
    } else {
        return false
    }
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
 ```

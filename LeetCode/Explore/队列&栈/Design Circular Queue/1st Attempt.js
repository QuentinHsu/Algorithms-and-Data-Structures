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
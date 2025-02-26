import { DataStructure } from '../dataStructures';

export const linkedList: DataStructure = {
    name: "Linked List",
    code: `
  class Node:
      def __init__(self, data):
          self.data = data
          self.next = None
  
  class LinkedList:
      def __init__(self):
          self.head = None
  
      def insert(self, data):
          new_node = Node(data)
          if not self.head:
              self.head = new_node
          else:
              current = self.head
              while current.next:
                  current = current.next
              current.next = new_node
  
      # Other methods...
    `,
    language: "python",
    sampleData: [10, 20, 30],
    explanation: `
  A linked list is a linear data structure where elements are stored in nodes. Each node contains a data field and a reference to the next node in the sequence.
  
  Key operations:
  - insert(): Adds a new node to the end of the list
  - display(): Returns all elements in the list
  - find(): Searches for a specific element
  - remove(): Removes a specific element
  - is_empty(): Checks if the list is empty
  - get_count(): Returns the number of elements in the list
    `
  };
  
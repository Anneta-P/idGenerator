const newIdGenerator = prefix => {
  let counter = 1;

  return () => {
    const id = `${prefix}-${counter}`;
    counter++;
    return id;
  };
};

const idReneratorPosts = newIdGenerator('posts');
const idReneratorComments = newIdGenerator('comments');

const p1 = idReneratorPosts(); // posts-1
const p2 = idReneratorPosts(); // posts-2
const p3 = idReneratorPosts(); // posts-3

const c1 = idReneratorComments(); // comments-1
const c2 = idReneratorComments(); // comments-2
const c3 = idReneratorComments(); // comments-3

// реализовать замыкание в `newIdGenerator`
// генератор `id`
console.log('p1:', p1);
console.log('p2:', p2);
console.log('p3:', p3);
console.log('c1:', c1);
console.log('c2:', c2);
console.log('c3:', c3);

npm i --save express stripe express-handlebars

set up stripe with the secret key

`data-key="pk_test_Cro8sVxq9it0EtbY5MIuauza00ln8fiKbY"`
in the stripe api checkout for, your `data key` should be your public key

`data-amount="2500"` is the data amount you want to charge, so 2500 for $25.

`data-name="Web Development Ebook"` is the product name

For a zipcode field add: `data-zip-code="true"`

to add a photo `data-image="/img/marketplace.png"`
whatever image it has to be named marketplace.png or it wont work.

to replace checkout button with your own

       <pre><script>
          // Hide default stripe button
          document.getElementsByClassName('stripe-button-el')[0].style.display = 'none';
        </script>
        <button type="submit" class="btn btn-outline-dark text-white btn-lg">Purchase For $25</button>`</pre>
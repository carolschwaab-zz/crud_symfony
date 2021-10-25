var $collectionHolderImage;

// setup an "add a image" link
var $addImageButton = $('<button type="button" class="add_image_link">Add a image</button>');
var $newLinkLiImage = $('<li></li>').append($addImageButton);

jQuery(document).ready(function() {
    // Get the ul that holds the collection of images
    $collectionHolderImage = $('ul.images');

    // add a delete link to all of the existing image form li elements
    $collectionHolderImage.find('li').each(function() {
        addImageFormDeleteLink($(this));
    });

    // add the "add a image" anchor and li to the images ul
    $collectionHolderImage.append($newLinkLiImage);

    // count the current form inputs we have (e.g. 2), use that as the new
    // index when inserting a new item (e.g. 2)
    $collectionHolderImage.data('index', $collectionHolderImage.find('input').length);

    $addImageButton.on('click', function(e) {
        // add a new image form (see next code block)
        addImageForm($collectionHolderImage, $newLinkLiImage);
    });
});

function addImageForm($collectionHolderImage, $newLinkLiImage) {
    // Get the data-prototype explained earlier
    var prototype = $collectionHolderImage.data('prototype');

    // get the new index
    var index = $collectionHolderImage.data('index');

    var newForm = prototype;
    // You need this only if you didn't set 'label' => false in your images field in TaskType
    // Replace '__name__label__' in the prototype's HTML to
    // instead be a number based on how many items we have
    // newForm = newForm.replace(/__name__label__/g, index);

    // Replace '__name__' in the prototype's HTML to
    // instead be a number based on how many items we have
    newForm = newForm.replace(/__name__/g, index);

    // increase the index with one for the next item
    $collectionHolderImage.data('index', index + 1);

    // Display the form in the page in an li, before the "Add a image" link li
    var $newFormLi = $('<li></li>').append(newForm);
    $newLinkLiImage.before($newFormLi);

    // add a delete link to the new form
    addImageFormDeleteLink($newFormLi);
}

function addImageFormDeleteLink($imageFormLi) {
    var $removeFormButton = $('<button type="button">Delete this image</button>');
    $imageFormLi.append($removeFormButton);

    $removeFormButton.on('click', function(e) {
        // remove the li for the image form
        $imageFormLi.remove();
    });
}
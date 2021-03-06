(function () {
    ko.validation.rules['isPositiveNumber'] = {
        validator: function (value, mustBePositive) {
            if (!mustBePositive) {
                return true;
            }

            return value >= 0;
        },
        message: "The value must be positive"
    };

    ko.validation.registerExtenders();
})();

function employeeService($http, $rootScope, $q) {
    return {
        getAllCustomers: GetAllCustomers,
        getFormStatusType: GetFormStatusType,
        uploadFileToUrl: UploadFileToUrl
    };

    function GetFormStatusType() {
        return {
            Add: 1,
            Update: 2
        }
    }

    function UploadFileToUrl(file, uploadUrl) {
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        })
        .success(function () {
        })
        .error(function () {
        });
    }

    function GetAllCustomers() {
        var request = $http.get('/Global/Advert/Controllers/RCBSubmitBriefReview/' + activityId + '?briefStatusType=' + briefStatusType);
        return (request.then(handleSuccess, handleError));
    }

    function handleError(response) {
        if (!angular.isObject(response.data) || !response.data.message) {
            return ($q.reject("An unknown error occurred."));
        }
        return ($q.reject(response.data.message));
    }

    function handleSuccess(response) {
        return (response.data);
    }

};
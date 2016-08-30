/* Suitelet to search Employee record for Department to get around user restrictions for client script automation on requisitions.
*   Version      Date               Author               Remarks
*   1.0         3 June             deastes             Initial Create
*   1.1        20 June             deastes             Added Subsidiary to the return value on the suitelet.
*   1.2         1 July             deastes             Added Employee level to the return value. Needed for expanded approval logic.
*   1.3         7 July             dbeastes            Changed to return value if any of department, subsidiary or employee level is found.
*/

/**
 *@NApiVersion 2.x
 *@NScriptType Suitelet
 *@NModuleScope Public
 */

define(['N/search'], function(search) {
    function onRequest(context) {
        try{
        var response = context.response;
        var employee = context.request.body;
        log.debug('employee:', employee);
        var employeeSearch = search.create({
            type: search.Type.EMPLOYEE,
            columns: ['department', 'subsidiary','custentity_bpc_employeelevel'],
            filters: [['internalid', 'anyof', employee]]
        });
        var results = employeeSearch.run().getRange({
            start: 0,
            end: 1000
        });
        var department = results[0].getValue('department');
        var subsidiary = results[0].getValue('subsidiary');
        var employeeLevel = results[0].getValue('custentity_bpc_employeelevel');
            
        log.debug('department:', department);
        log.debug('Subsidiary:', subsidiary);
        log.debug('Employee Level', employeeLevel);
        if(department || subsidiary || employeeLevel){
            response.write(department + ':' + subsidiary + ':' + employeeLevel);
            response.addHeader({
                name: 'Success',
                value: 'true'
            });
            }
        }catch(e){log.debug('Error running the suitelet', e);}
    }
    return {
        onRequest: onRequest
    };
});
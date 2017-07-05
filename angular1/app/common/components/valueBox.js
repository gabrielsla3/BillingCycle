angular.module('billingCycleApp').component('valueBox', {
    bindings: {
        grid: '@',
        colorClass: '@',
        value: '@',
        text: '@',
        iconClass: '@'
    },
    controller: ['gridSystem', function(gridSystem){
        //onInit utilizado para garantir que a linha de código será executada somente após a inicialização dos bindings e elementos.
        this.$onInit = () => this.gridClasses = gridSystem.toCssClasses(this.grid);        
    }],
    template: 
    `
    <div class="{{ $ctrl.gridClasses }}">
        <div class="small-box {{ $ctrl.colorClass }}">
            <div class="inner">
                <h3>{{ $ctrl.value }}</h3>
                <p>{{ $ctrl.text }}</p>
            </div>
            <div class="icon">
                <i class="{{ $ctrl.iconClass }}"></i>
            </div>
        </div>
    </div>
    `
});
import { ParentComponent } from './parent-component.component';
import { AppService } from '../app.service';
import { from } from 'rxjs';

describe('ParentComponent', () => {
  xdescribe('First tests', () => {
    let component: ParentComponent;
    const mockItems = [
      { brand: 'Mock brand 1', product_id: 1, product_name: 'name1' },
      { brand: 'Mock brand 2', product_id: 2, product_name: 'name2' },
    ];
    const appService = {
      getItems: () => {
        return from([mockItems]);
      },
    } as AppService;

    beforeEach(() => {
      component = new ParentComponent(appService);
    });

    it('should create component', () => {
      expect(component).toBeDefined();
    });

    it('should be initialized', () => {
      expect(component.items.length).toEqual(0);

      component.ngOnInit();

      expect(component.items.length).toEqual(2);
    });

    it('should return length of items array', () => {
      component.items = mockItems;

      expect(component.getItemsCount()).toEqual(2);
    });
  });

  describe('Second tests', () => {
    let component: ParentComponent;
    let appService: AppService;
    const mockItems = [
      { brand: 'Mock brand 1', product_id: 1, product_name: 'name1' },
      { brand: 'Mock brand 2', product_id: 2, product_name: 'name2' },
    ];

    beforeEach(() => {
      appService = new AppService();
      component = new ParentComponent(appService);
    });

    it('should be initialized', () => {
      spyOn(appService, 'getItems').and.returnValue(from(mockItems));

      component.ngOnInit();

      expect(appService.getItems).toHaveBeenCalled();
    });
  });
});

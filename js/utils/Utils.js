class Utils {
    getPositionAtCenter(element) {
        const {top, left, width, height} = element.getBoundingClientRect();
        return {
          x: left + width / 2,
          y: top + height / 2
        };
    }
     
    getDistanceBetweenElements(a, b) {
       const aPosition = this.getPositionAtCenter(a);
       const bPosition = this.getPositionAtCenter(b);
     
       return Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y);  
    }
}
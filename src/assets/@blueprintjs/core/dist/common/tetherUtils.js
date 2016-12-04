/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var position_1 = require("./position");
var DEFAULT_CONSTRAINTS = {
    attachment: "together",
    to: "scrollParent",
};
/** @internal */
function createTetherOptions(element, target, position, useSmartPositioning, constraints) {
    if (constraints == null && useSmartPositioning) {
        constraints = [DEFAULT_CONSTRAINTS];
    }
    var options = {
        attachment: getPopoverAttachment(position),
        classPrefix: "pt-tether",
        constraints: constraints,
        element: element,
        target: target,
        targetAttachment: getTargetAttachment(position),
    };
    return options;
}
exports.createTetherOptions = createTetherOptions;
/** @internal */
function getTargetAttachment(position) {
    var attachments = (_a = {},
        _a[position_1.Position.TOP_LEFT] = "top left",
        _a[position_1.Position.TOP] = "top center",
        _a[position_1.Position.TOP_RIGHT] = "top right",
        _a[position_1.Position.RIGHT_TOP] = "top right",
        _a[position_1.Position.RIGHT] = "middle right",
        _a[position_1.Position.RIGHT_BOTTOM] = "bottom right",
        _a[position_1.Position.BOTTOM_RIGHT] = "bottom right",
        _a[position_1.Position.BOTTOM] = "bottom center",
        _a[position_1.Position.BOTTOM_LEFT] = "bottom left",
        _a[position_1.Position.LEFT_BOTTOM] = "bottom left",
        _a[position_1.Position.LEFT] = "middle left",
        _a[position_1.Position.LEFT_TOP] = "top left",
        _a
    );
    return attachments[position];
    var _a;
}
exports.getTargetAttachment = getTargetAttachment;
/** @internal */
function getPopoverAttachment(position) {
    var attachments = (_a = {},
        _a[position_1.Position.TOP_LEFT] = "bottom left",
        _a[position_1.Position.TOP] = "bottom center",
        _a[position_1.Position.TOP_RIGHT] = "bottom right",
        _a[position_1.Position.RIGHT_TOP] = "top left",
        _a[position_1.Position.RIGHT] = "middle left",
        _a[position_1.Position.RIGHT_BOTTOM] = "bottom left",
        _a[position_1.Position.BOTTOM_RIGHT] = "top right",
        _a[position_1.Position.BOTTOM] = "top center",
        _a[position_1.Position.BOTTOM_LEFT] = "top left",
        _a[position_1.Position.LEFT_BOTTOM] = "bottom right",
        _a[position_1.Position.LEFT] = "middle right",
        _a[position_1.Position.LEFT_TOP] = "top right",
        _a
    );
    return attachments[position];
    var _a;
}
exports.getPopoverAttachment = getPopoverAttachment;
/** @internal */
function getAttachmentClasses(position) {
    // this essentially reimplements the Tether logic for attachment classes so the same styles
    // can be reused outside of Tether-based popovers.
    return expandAttachmentClasses(getPopoverAttachment(position), "pt-tether-element-attached").concat(expandAttachmentClasses(getTargetAttachment(position), "pt-tether-target-attached"));
}
exports.getAttachmentClasses = getAttachmentClasses;
function expandAttachmentClasses(attachments, prefix) {
    var _a = attachments.split(" "), verticalAlign = _a[0], horizontalAlign = _a[1];
    return [(prefix + "-" + verticalAlign), (prefix + "-" + horizontalAlign)];
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21tb24vdGV0aGVyVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7O0FBSUgseUJBQXlCLFlBQVksQ0FBQyxDQUFBO0FBRXRDLElBQU0sbUJBQW1CLEdBQUc7SUFDeEIsVUFBVSxFQUFFLFVBQVU7SUFDdEIsRUFBRSxFQUFFLGNBQWM7Q0FDckIsQ0FBQztBQVVGLGdCQUFnQjtBQUNoQiw2QkFBb0MsT0FBZ0IsRUFDaEIsTUFBWSxFQUNaLFFBQWtCLEVBQ2xCLG1CQUE0QixFQUM1QixXQUFnQztJQUNoRSxFQUFFLENBQUMsQ0FBQyxXQUFXLElBQUksSUFBSSxJQUFJLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUM3QyxXQUFXLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxJQUFNLE9BQU8sR0FBMEI7UUFDbkMsVUFBVSxFQUFFLG9CQUFvQixDQUFDLFFBQVEsQ0FBQztRQUMxQyxXQUFXLEVBQUUsV0FBVztRQUN4Qix3QkFBVztRQUNYLGdCQUFPO1FBQ1AsY0FBTTtRQUNOLGdCQUFnQixFQUFFLG1CQUFtQixDQUFDLFFBQVEsQ0FBQztLQUNsRCxDQUFDO0lBQ0YsTUFBTSxDQUFDLE9BQU8sQ0FBQztBQUNuQixDQUFDO0FBbEJlLDJCQUFtQixzQkFrQmxDLENBQUE7QUFFRCxnQkFBZ0I7QUFDaEIsNkJBQW9DLFFBQWtCO0lBQ2xELElBQU0sV0FBVyxHQUEwQjtRQUN2QyxHQUFDLG1CQUFRLENBQUMsUUFBUSxDQUFDLEdBQU0sVUFBVTtRQUNuQyxHQUFDLG1CQUFRLENBQUMsR0FBRyxDQUFDLEdBQVcsWUFBWTtRQUNyQyxHQUFDLG1CQUFRLENBQUMsU0FBUyxDQUFDLEdBQUssV0FBVztRQUNwQyxHQUFDLG1CQUFRLENBQUMsU0FBUyxDQUFDLEdBQUssV0FBVztRQUNwQyxHQUFDLG1CQUFRLENBQUMsS0FBSyxDQUFDLEdBQVMsY0FBYztRQUN2QyxHQUFDLG1CQUFRLENBQUMsWUFBWSxDQUFDLEdBQUUsY0FBYztRQUN2QyxHQUFDLG1CQUFRLENBQUMsWUFBWSxDQUFDLEdBQUUsY0FBYztRQUN2QyxHQUFDLG1CQUFRLENBQUMsTUFBTSxDQUFDLEdBQVEsZUFBZTtRQUN4QyxHQUFDLG1CQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsYUFBYTtRQUN0QyxHQUFDLG1CQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsYUFBYTtRQUN0QyxHQUFDLG1CQUFRLENBQUMsSUFBSSxDQUFDLEdBQVUsYUFBYTtRQUN0QyxHQUFDLG1CQUFRLENBQUMsUUFBUSxDQUFDLEdBQU0sVUFBVTs7S0FDdEMsQ0FBQztJQUNGLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7O0FBQ2pDLENBQUM7QUFoQmUsMkJBQW1CLHNCQWdCbEMsQ0FBQTtBQUVELGdCQUFnQjtBQUNoQiw4QkFBcUMsUUFBa0I7SUFDbkQsSUFBTSxXQUFXLEdBQTBCO1FBQ3ZDLEdBQUMsbUJBQVEsQ0FBQyxRQUFRLENBQUMsR0FBTSxhQUFhO1FBQ3RDLEdBQUMsbUJBQVEsQ0FBQyxHQUFHLENBQUMsR0FBVyxlQUFlO1FBQ3hDLEdBQUMsbUJBQVEsQ0FBQyxTQUFTLENBQUMsR0FBSyxjQUFjO1FBQ3ZDLEdBQUMsbUJBQVEsQ0FBQyxTQUFTLENBQUMsR0FBSyxVQUFVO1FBQ25DLEdBQUMsbUJBQVEsQ0FBQyxLQUFLLENBQUMsR0FBUyxhQUFhO1FBQ3RDLEdBQUMsbUJBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRSxhQUFhO1FBQ3RDLEdBQUMsbUJBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRSxXQUFXO1FBQ3BDLEdBQUMsbUJBQVEsQ0FBQyxNQUFNLENBQUMsR0FBUSxZQUFZO1FBQ3JDLEdBQUMsbUJBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxVQUFVO1FBQ25DLEdBQUMsbUJBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxjQUFjO1FBQ3ZDLEdBQUMsbUJBQVEsQ0FBQyxJQUFJLENBQUMsR0FBVSxjQUFjO1FBQ3ZDLEdBQUMsbUJBQVEsQ0FBQyxRQUFRLENBQUMsR0FBTSxXQUFXOztLQUN2QyxDQUFDO0lBQ0YsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFDakMsQ0FBQztBQWhCZSw0QkFBb0IsdUJBZ0JuQyxDQUFBO0FBRUQsZ0JBQWdCO0FBQ2hCLDhCQUFxQyxRQUFrQjtJQUNuRCwyRkFBMkY7SUFDM0Ysa0RBQWtEO0lBQ2xELE1BQU0sQ0FDQyx1QkFBdUIsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsRUFBRSw0QkFBNEIsQ0FBQyxRQUNyRix1QkFBdUIsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsRUFBRSwyQkFBMkIsQ0FBQyxDQUN6RixDQUFDO0FBQ04sQ0FBQztBQVBlLDRCQUFvQix1QkFPbkMsQ0FBQTtBQUVELGlDQUFpQyxXQUFtQixFQUFFLE1BQWM7SUFDaEUsSUFBQSwyQkFBK0QsRUFBeEQscUJBQWEsRUFBRSx1QkFBZSxDQUEyQjtJQUNoRSxNQUFNLENBQUMsQ0FBQyxDQUFHLE1BQU0sU0FBSSxhQUFhLENBQUUsRUFBRSxDQUFHLE1BQU0sU0FBSSxlQUFlLENBQUUsQ0FBQyxDQUFDO0FBQzFFLENBQUMiLCJmaWxlIjoiY29tbW9uL3RldGhlclV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE1IFBhbGFudGlyIFRlY2hub2xvZ2llcywgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEJTRC0zIExpY2Vuc2UgYXMgbW9kaWZpZWQgKHRoZSDigJxMaWNlbnNl4oCdKTsgeW91IG1heSBvYnRhaW4gYSBjb3B5XG4gKiBvZiB0aGUgbGljZW5zZSBhdCBodHRwczovL2dpdGh1Yi5jb20vcGFsYW50aXIvYmx1ZXByaW50L2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqIGFuZCBodHRwczovL2dpdGh1Yi5jb20vcGFsYW50aXIvYmx1ZXByaW50L2Jsb2IvbWFzdGVyL1BBVEVOVFNcbiAqL1xuXG5pbXBvcnQgKiBhcyBUZXRoZXIgZnJvbSBcInRldGhlclwiO1xuXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuL3Bvc2l0aW9uXCI7XG5cbmNvbnN0IERFRkFVTFRfQ09OU1RSQUlOVFMgPSB7XG4gICAgYXR0YWNobWVudDogXCJ0b2dldGhlclwiLFxuICAgIHRvOiBcInNjcm9sbFBhcmVudFwiLFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBJVGV0aGVyQ29uc3RyYWludCB7XG4gICAgYXR0YWNobWVudD86IHN0cmluZztcbiAgICBvdXRPZkJvdW5kc0NsYXNzPzogc3RyaW5nO1xuICAgIHBpbj86IGJvb2xlYW4gfCBzdHJpbmdbXTtcbiAgICBwaW5uZWRDbGFzcz86IHN0cmluZztcbiAgICB0bz86IHN0cmluZyB8IEhUTUxFbGVtZW50IHwgbnVtYmVyW107XG59XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUZXRoZXJPcHRpb25zKGVsZW1lbnQ6IEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IE5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogUG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VTbWFydFBvc2l0aW9uaW5nOiBib29sZWFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3RyYWludHM6IElUZXRoZXJDb25zdHJhaW50W10pIHtcbiAgICBpZiAoY29uc3RyYWludHMgPT0gbnVsbCAmJiB1c2VTbWFydFBvc2l0aW9uaW5nKSB7XG4gICAgICAgIGNvbnN0cmFpbnRzID0gW0RFRkFVTFRfQ09OU1RSQUlOVFNdO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnM6IFRldGhlci5JVGV0aGVyT3B0aW9ucyA9IHtcbiAgICAgICAgYXR0YWNobWVudDogZ2V0UG9wb3ZlckF0dGFjaG1lbnQocG9zaXRpb24pLFxuICAgICAgICBjbGFzc1ByZWZpeDogXCJwdC10ZXRoZXJcIixcbiAgICAgICAgY29uc3RyYWludHMsXG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgdGFyZ2V0QXR0YWNobWVudDogZ2V0VGFyZ2V0QXR0YWNobWVudChwb3NpdGlvbiksXG4gICAgfTtcbiAgICByZXR1cm4gb3B0aW9ucztcbn1cblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRhcmdldEF0dGFjaG1lbnQocG9zaXRpb246IFBvc2l0aW9uKSB7XG4gICAgY29uc3QgYXR0YWNobWVudHM6IHtbcDogbnVtYmVyXTogc3RyaW5nfSA9IHtcbiAgICAgICAgW1Bvc2l0aW9uLlRPUF9MRUZUXTogICAgIFwidG9wIGxlZnRcIixcbiAgICAgICAgW1Bvc2l0aW9uLlRPUF06ICAgICAgICAgIFwidG9wIGNlbnRlclwiLFxuICAgICAgICBbUG9zaXRpb24uVE9QX1JJR0hUXTogICAgXCJ0b3AgcmlnaHRcIixcbiAgICAgICAgW1Bvc2l0aW9uLlJJR0hUX1RPUF06ICAgIFwidG9wIHJpZ2h0XCIsXG4gICAgICAgIFtQb3NpdGlvbi5SSUdIVF06ICAgICAgICBcIm1pZGRsZSByaWdodFwiLFxuICAgICAgICBbUG9zaXRpb24uUklHSFRfQk9UVE9NXTogXCJib3R0b20gcmlnaHRcIixcbiAgICAgICAgW1Bvc2l0aW9uLkJPVFRPTV9SSUdIVF06IFwiYm90dG9tIHJpZ2h0XCIsXG4gICAgICAgIFtQb3NpdGlvbi5CT1RUT01dOiAgICAgICBcImJvdHRvbSBjZW50ZXJcIixcbiAgICAgICAgW1Bvc2l0aW9uLkJPVFRPTV9MRUZUXTogIFwiYm90dG9tIGxlZnRcIixcbiAgICAgICAgW1Bvc2l0aW9uLkxFRlRfQk9UVE9NXTogIFwiYm90dG9tIGxlZnRcIixcbiAgICAgICAgW1Bvc2l0aW9uLkxFRlRdOiAgICAgICAgIFwibWlkZGxlIGxlZnRcIixcbiAgICAgICAgW1Bvc2l0aW9uLkxFRlRfVE9QXTogICAgIFwidG9wIGxlZnRcIixcbiAgICB9O1xuICAgIHJldHVybiBhdHRhY2htZW50c1twb3NpdGlvbl07XG59XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3BvdmVyQXR0YWNobWVudChwb3NpdGlvbjogUG9zaXRpb24pIHtcbiAgICBjb25zdCBhdHRhY2htZW50czoge1twOiBudW1iZXJdOiBzdHJpbmd9ID0ge1xuICAgICAgICBbUG9zaXRpb24uVE9QX0xFRlRdOiAgICAgXCJib3R0b20gbGVmdFwiLFxuICAgICAgICBbUG9zaXRpb24uVE9QXTogICAgICAgICAgXCJib3R0b20gY2VudGVyXCIsXG4gICAgICAgIFtQb3NpdGlvbi5UT1BfUklHSFRdOiAgICBcImJvdHRvbSByaWdodFwiLFxuICAgICAgICBbUG9zaXRpb24uUklHSFRfVE9QXTogICAgXCJ0b3AgbGVmdFwiLFxuICAgICAgICBbUG9zaXRpb24uUklHSFRdOiAgICAgICAgXCJtaWRkbGUgbGVmdFwiLFxuICAgICAgICBbUG9zaXRpb24uUklHSFRfQk9UVE9NXTogXCJib3R0b20gbGVmdFwiLFxuICAgICAgICBbUG9zaXRpb24uQk9UVE9NX1JJR0hUXTogXCJ0b3AgcmlnaHRcIixcbiAgICAgICAgW1Bvc2l0aW9uLkJPVFRPTV06ICAgICAgIFwidG9wIGNlbnRlclwiLFxuICAgICAgICBbUG9zaXRpb24uQk9UVE9NX0xFRlRdOiAgXCJ0b3AgbGVmdFwiLFxuICAgICAgICBbUG9zaXRpb24uTEVGVF9CT1RUT01dOiAgXCJib3R0b20gcmlnaHRcIixcbiAgICAgICAgW1Bvc2l0aW9uLkxFRlRdOiAgICAgICAgIFwibWlkZGxlIHJpZ2h0XCIsXG4gICAgICAgIFtQb3NpdGlvbi5MRUZUX1RPUF06ICAgICBcInRvcCByaWdodFwiLFxuICAgIH07XG4gICAgcmV0dXJuIGF0dGFjaG1lbnRzW3Bvc2l0aW9uXTtcbn1cblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEF0dGFjaG1lbnRDbGFzc2VzKHBvc2l0aW9uOiBQb3NpdGlvbikge1xuICAgIC8vIHRoaXMgZXNzZW50aWFsbHkgcmVpbXBsZW1lbnRzIHRoZSBUZXRoZXIgbG9naWMgZm9yIGF0dGFjaG1lbnQgY2xhc3NlcyBzbyB0aGUgc2FtZSBzdHlsZXNcbiAgICAvLyBjYW4gYmUgcmV1c2VkIG91dHNpZGUgb2YgVGV0aGVyLWJhc2VkIHBvcG92ZXJzLlxuICAgIHJldHVybiBbXG4gICAgICAgIC4uLmV4cGFuZEF0dGFjaG1lbnRDbGFzc2VzKGdldFBvcG92ZXJBdHRhY2htZW50KHBvc2l0aW9uKSwgXCJwdC10ZXRoZXItZWxlbWVudC1hdHRhY2hlZFwiKSxcbiAgICAgICAgLi4uZXhwYW5kQXR0YWNobWVudENsYXNzZXMoZ2V0VGFyZ2V0QXR0YWNobWVudChwb3NpdGlvbiksIFwicHQtdGV0aGVyLXRhcmdldC1hdHRhY2hlZFwiKSxcbiAgICBdO1xufVxuXG5mdW5jdGlvbiBleHBhbmRBdHRhY2htZW50Q2xhc3NlcyhhdHRhY2htZW50czogc3RyaW5nLCBwcmVmaXg6IHN0cmluZykge1xuICAgIGNvbnN0IFt2ZXJ0aWNhbEFsaWduLCBob3Jpem9udGFsQWxpZ25dID0gYXR0YWNobWVudHMuc3BsaXQoXCIgXCIpO1xuICAgIHJldHVybiBbYCR7cHJlZml4fS0ke3ZlcnRpY2FsQWxpZ259YCwgYCR7cHJlZml4fS0ke2hvcml6b250YWxBbGlnbn1gXTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

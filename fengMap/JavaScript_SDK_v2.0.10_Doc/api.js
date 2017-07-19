YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "fengmap.FMDirection",
        "fengmap.FMFacility",
        "fengmap.FMFacilityLayer",
        "fengmap.FMGroup",
        "fengmap.FMHeatMap",
        "fengmap.FMImageMarker",
        "fengmap.FMImageMarkerLayer",
        "fengmap.FMLabel",
        "fengmap.FMLabelLayer",
        "fengmap.FMLineMarker",
        "fengmap.FMLineType",
        "fengmap.FMLocationMarker",
        "fengmap.FMLocationMarkerLayer",
        "fengmap.FMMap",
        "fengmap.FMMapCoord",
        "fengmap.FMMapGestureEnableController",
        "fengmap.FMNaviAnalyser",
        "fengmap.FMNaviModule",
        "fengmap.FMNaviResult",
        "fengmap.FMNavigation",
        "fengmap.FMNode",
        "fengmap.FMNodeType",
        "fengmap.FMPolygonMarker",
        "fengmap.FMPopInfoWindow",
        "fengmap.FMRouteCalcuResult",
        "fengmap.FMScreenCoord",
        "fengmap.FMSearchAnalyser",
        "fengmap.FMSearchRequest",
        "fengmap.FMSegment",
        "fengmap.FMStroeModel",
        "fengmap.FMTextMarker",
        "fengmap.FMTextMarkerLayer",
        "fengmap.FMViewMode",
        "fengmap.MapOptions",
        "fengmap.NaviOptions",
        "fengmap.buttonGroupsControl",
        "fengmap.controlOffset",
        "fengmap.controlOptions",
        "fengmap.controlPositon",
        "fengmap.scrollGroupsControl",
        "fengmap.toolControl",
        "fengmap.zoomControl"
    ],
    "modules": [
        "FMControls",
        "FMEnum",
        "FMMap",
        "FMNode",
        "FMSearchAnalyser",
        "Navigation"
    ],
    "allModules": [
        {
            "displayName": "FMControls",
            "name": "FMControls",
            "description": "fengmap JavaScript SDK 提供基本控件。\n包括：放大、缩小控件。单层、多层控件。两种楼层切换控件、二三维控件、指南针。",
            "classes": [
                {
                    "name": "fengmap.controlOptions"
                },
                {
                    "name": "fengmap.controlPositon"
                },
                {
                    "name": "fengmap.controlOffset"
                },
                {
                    "name": "fengmap.buttonGroupsControl"
                },
                {
                    "name": "fengmap.scrollGroupsControl"
                },
                {
                    "name": "fengmap.FMPopInfoWindow"
                },
                {
                    "name": "fengmap.toolControl"
                },
                {
                    "name": "fengmap.zoomControl"
                }
            ]
        },
        {
            "displayName": "FMEnum",
            "name": "FMEnum",
            "description": "FMDirection 地图方向状态枚举",
            "classes": [
                {
                    "name": "fengmap.FMDirection"
                },
                {
                    "name": "fengmap.FMLineType"
                },
                {
                    "name": "fengmap.FMNodeType"
                },
                {
                    "name": "fengmap.FMViewMode"
                }
            ]
        },
        {
            "displayName": "FMMap",
            "name": "FMMap",
            "description": "地图模块是核心。实现加载场景、显示模型、遍历模型、图层控制、主题变换、指南针等方法。同时包含了旋转、点击、模型拾取、放大、缩小等操作控制。",
            "classes": [
                {
                    "name": "fengmap.FMMap"
                },
                {
                    "name": "fengmap.FMHeatMap"
                },
                {
                    "name": "fengmap.FMLineMarker"
                },
                {
                    "name": "fengmap.FMSegment"
                },
                {
                    "name": "fengmap.MapOptions"
                },
                {
                    "name": "fengmap.FMMapCoord"
                },
                {
                    "name": "fengmap.FMScreenCoord"
                },
                {
                    "name": "fengmap.FMMapGestureEnableController"
                }
            ]
        },
        {
            "displayName": "FMNode",
            "name": "FMNode",
            "description": "fengmap JavaScript SDK 支持多种地图元素的图层控制。\n包括设置某楼层的文本标签层和公共设施层的隐藏和显示；模型的选中；绘制线图层等。\n各个地图元素又包含其固有属性，如地图坐标，ID，楼层ID等信息。",
            "classes": [
                {
                    "name": "fengmap.FMFacility"
                },
                {
                    "name": "fengmap.FMImageMarker"
                },
                {
                    "name": "fengmap.FMLabel"
                },
                {
                    "name": "fengmap.FMLocationMarker"
                },
                {
                    "name": "fengmap.FMStroeModel"
                },
                {
                    "name": "fengmap.FMPolygonMarker"
                },
                {
                    "name": "fengmap.FMTextMarker"
                },
                {
                    "name": "fengmap.FMGroup"
                },
                {
                    "name": "fengmap.FMFacilityLayer"
                },
                {
                    "name": "fengmap.FMImageMarkerLayer"
                },
                {
                    "name": "fengmap.FMLabelLayer"
                },
                {
                    "name": "fengmap.FMLocationMarkerLayer"
                },
                {
                    "name": "fengmap.FMTextMarkerLayer"
                },
                {
                    "name": "fengmap.FMNode"
                }
            ]
        },
        {
            "displayName": "FMSearchAnalyser",
            "name": "FMSearchAnalyser",
            "description": "fengmap JavaScript SDK 支持同层和跨层路径规划。支持最短路径、最优路径两种规划策略。\n同层路径规划：同一楼层任意位置间路径规划；\n跨层路径规划：不同楼层任意位置间路径规划。",
            "classes": [
                {
                    "name": "fengmap.FMSearchAnalyser"
                },
                {
                    "name": "fengmap.FMSearchRequest"
                }
            ]
        },
        {
            "displayName": "Navigation",
            "name": "Navigation",
            "description": "fengmap JavaScript SDK 支持同层和跨层路径规划。支持最短路径、最优路径两种规划策略。\n同层路径规划：同一楼层任意位置间路径规划；\n跨层路径规划：不同楼层任意位置间路径规划。若路径在模型中应用时，当fengmap.MapOptions中的isSeparate属性为false时，跨层路径分析可用。",
            "classes": [
                {
                    "name": "fengmap.FMNaviAnalyser"
                },
                {
                    "name": "fengmap.FMNaviModule"
                },
                {
                    "name": "fengmap.FMNaviResult"
                },
                {
                    "name": "fengmap.FMRouteCalcuResult"
                },
                {
                    "name": "fengmap.FMNavigation"
                },
                {
                    "name": "fengmap.NaviOptions"
                }
            ]
        }
    ]
} };
});
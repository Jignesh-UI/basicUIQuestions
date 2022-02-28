var minMove;
var winWidth;
var menuItemsHeight;
var activeTileIndex;
var currentProgramDetailSlide = 0;
var currentStartNowSlide = 0;
var startnow_slide_count = 0;
var startNowSliderInterval = true;


var touches = {
    "touchstart": { "x": -1, "y": -1 },
    "touchmove": { "x": -1, "y": -1 },
    "touchend": false,
    "direction": "undetermined"
}

$(document).ready(function () {
    minMove = 1;
    winWidth = $(window).outerWidth();
    toggleSearchFilter();
    loadUniversityDetails();
    expandMobileMenuUniversityDetails();
    countScrollWidth();
    loadProfilePopUp();
    adjustProgramDetails();
    toggleUploadFileBox();
    toggleChangePwdButtonPopUp();
    addCustomScrollTopButton();
    closeCookiePopUp();
    studentResourcesLeftNavigation();
    showHideSavedPrograms();
    closefaqSearchWrapper();
    closeAdditionalFilters();
    closeAdditionalZFilters();
    eligibilityFormTabs();
    funcPDetailHorozontalMenu();
    oldScrollbar();
    manageTrackPopup();
    adjustTrackBoxHeaderHeight();
    setTabforMobileView();
    picklistCheckBoxClickTriggers();
    togglePicklistCheckBox();
    selectSkillsDC();
    viewProgressDC();
    degreeOptionSelectDC();
    setDetailTMColumns();
    toggleSavingsReportModalDC();
    setReviewSectionSavingsReportOnScrollDC();
    comapreProgramSavingsReportTabsClickDC();
    comapreProgramDC();
    comapreProgramTabsClickDC();
    closeAdditionalTuitionAssistanceFilters();
    flipCardOnClick();
    closeSideMenu();
    openSideMenu();
    openDropDownButton();
    closeDropDownButton();
    onFavoriteProgramGridListDropDownClickEvent();
    initTuitionManagementTilesCarousel();
    setDefaultTuitionManagementCarouselItem();
    onTuitionManagementCarouselItemClickEvent();
    onSubItemBoxClickEvent();
    onSubMenuBackButtonClickEvent();
    onMyFilterTitleLinkEvent();
    onMyFilterModalTitleCloseEvent();
    onSuccessErrorMessageCloseButtonBoxClickEvent();
    closeBackEndErrorMessage();
    activateSearchProgramTabs();
    onSearchCheckboxChangeCalculateAppliedFilter();
    removeIndividualSearchAppliedFilter();
    setDisabledSearchComparePrograms();
    adjustSearchFilterScrollBar();
    onClickToggleSearchFilterCollapseItemTitle();
    setDisabledFavoriteComparePrograms();
    onClickTuitionManagementPickListItem();
    FlipTuitionReimbursementCardOnClick();
    onChangeMyProfileFile();
    activateAutoCompleteItem();
    onChangeTuitionManagementDocument();
    onClickEpbInterestedProgram();
    toggleEpbViewAnswersItem();
    hideViewAnswersModalOverflow();
    onClickOutOfNetworkPickListItem();
    savingsReportTableToggleColumn();
    setsavingsReportApplySectionOnScrollDC();
    showProgramDetailAboutUniversity();
    initProgramDetailsCarousel(currentProgramDetailSlide);
    createSearchAppliedFilters();
    setSearchFilterItemArrows();
    onclickExpandCollapseActualFilterItems();
    startNowSlide();
    setStartNowCarouselHeight();
    adjustHomePageBannerHoverClass();
});

$(window).resize(function () {
    minMove = 1;
    winWidth = $(window).outerWidth();
    adjustProgramDetails();
    countScrollWidth();
    oldScrollbar();
    viewProgressDC();
    comapreProgramSavingsReportDC();
    comapreProgramDC();
    hideBodyOverflow();
    adjustSearchFilterScrollBar();
    setDefaultTuitionManagementCarouselItem();
    if (winWidth < 430) {
        onClickGridListSearchResult('grid');
    }
    hideViewAnswersModalOverflow();
    savingsReportTableToggleColumn();
    setsavingsReportApplySectionOnScrollDC();
    showProgramDetailAboutUniversity();
    initProgramDetailsCarousel(currentProgramDetailSlide);
    //initStartNowCarousel(currentStartNowSlide);
    setStartNowCarouselHeight();
    checkNotificationHeight();
});

$(window).load(function () {
    adjustTrackBoxHeaderHeight();
    onPageLoadSetSearchAppliedFiltersItems();
    resetSortFilterValue();
    menuItemsHeight = $('.slideOutMenuProfileCrossButton').outerHeight(true) + $('.slideOutMenuItems').outerHeight(true);
    onclickFAQExpandCollapse();
    initStartNowCarousel(currentStartNowSlide);
});

$(window).scroll(function () {
    adjustProgramDetails();
    oldScrollbar();
});

function oldScrollbar() {
    if ($(this).scrollTop() > $(window).height()) {
        $('.backToTop').show();
    } else {
        $('.backToTop').hide();
    }
}

function funcPDetailHorozontalMenu() {
    var url = document.location.href;
    if (url.search("sapprogramdetails") > 1) {
        $(".universityDetailsHeader > ul").css("justify-content", "flex-start");
    }
}

function addCustomScrollTopButton() {
    $(".floatingBox").on("click", ".backToTop", function (e) {
        e.preventDefault();
        if ($(".backToTop").css("opacity") != "1")
            return false;
        window.scrollTo({ top: 0, behavior: "smooth" });
        $("#scroll").fadeOut();
    });
}

function adjustProgramDetails() {
    var windowWidth = $(window).width();
    if ($(".container").length < 1) {
        return false;
    }
    var mainContainerWidth = $(".container").width();
    var mainContainerLeft = $(".container").offset().left;
    if ($(window).scrollTop() >= 170) {
        $(".breadcrumbButtonFixed").css("top", "10px");
        $(".breadcrumbButtonFixed").css("position", "fixed");
        $(".breadcrumbButtonFixed").css("right", (windowWidth - (mainContainerWidth + mainContainerLeft)));
    } else {
        $(".breadcrumbButtonFixed").removeAttr("style");
    }
}

function countScrollWidth(e) {
    if (winWidth > 430) {
        minMove = 1;
        $(".tblResponsive thead,.tblResponsive tbody").children("tr").each(function () {
            $(this).children("th,td").each(function (count) {
                $(this).show();
            });
        });
        return false;
    } else {
        minMove = 1;
        tblResponsiveSelector(false, 0);
    }

    var hintScrollValue = $(".scrollbar").outerWidth() / 3;
    $(".scrolled").css("width", minMove * hintScrollValue);

    $(".leftScrollArrow").unbind("click").click(function () {
        if (minMove <= 1) { return false; }
        minMove -= 1;
        tblResponsiveSelector(true, hintScrollValue);
    });

    $(".rightScrollArrow").unbind("click").click(function () {
        if (minMove >= 3) { return false; }
        minMove += 1;
        tblResponsiveSelector(true, hintScrollValue);
    });
}

function tblResponsiveSelector(fromArrorClick, hintScrollValue) {
    if (fromArrorClick) {
        $(".scrolled").css("left", (minMove - 1) * hintScrollValue);
    }
    $(".tblResponsive thead,.tblResponsive tbody").children("tr").each(function () {
        $(this).children("th,td").each(function (count) {
            if (count > 0) {
                $(this).hide();
            }
            if (minMove == count) {
                $(this).show();
            }
        });
    });
}

function toggleSearchFilter() {
    $(".searchAgain").unbind().click(function () {
        if (($(".searchWrapper").css("display") == "block" && $(".PredefinedFilterBox").css("display") == "block")) {
            $(".searchWrapper,.PredefinedFilterBox").hide();
            $(this).addClass("closed");
        } else {
            $(this).removeClass("closed");
            $(".searchWrapper,.PredefinedFilterBox").show();
        }
    });
}

function showHideSavedPrograms() {
    $(".btnViewSavedProgram").unbind().click(function () {
        $(".listSavedPrograms").fadeIn();
    });
    $(".closeSavedProgramsPopUp").unbind().click(function () {
        $(".listSavedPrograms").fadeOut();
    });
}

function loadUniversityDetails() {
    $(".universityDetailsHeader li a").click(function (e) {
        e.preventDefault();
        $(".universityDetailsHeader li a").removeClass("active");
        $(this).addClass("active");
        var section = $(this).attr("dataref");
        if ($(section).offset()) {
            $("html, body").animate({
                scrollTop: ($(section).offset().top - 60)
            });
        }
    });
}

function expandMobileMenuUniversityDetails() {
    $(".mobileViewListItemsTitle").click(function () {
        $(".universityDetailsHeader ul").slideToggle();
        if ($(".universityDetailsHeader ul").is(":visible"))
            $(".universityDetailsHeader ul").css("display", "flex");
    });
    $(".universityDetailsHeader ul > li a").click(function () {
        $(".mobileViewListItemsTitle").html($(this).html());
        $(".universityDetailsHeader ul").removeAttr("style");
        var url = document.location.href;
        if (url.search("sapprogramdetails") > 1) {
            $(".universityDetailsHeader > ul").css("justify-content", "flex-start");
        }
    });
}

function loadProfilePopUp() {
    $(".smallProfileImg,.smallProfileLink").click(function () {
        if ($(".profilePopup").css("display") == "block")
            return false;
        $(".profilePopup").show();
    });
    $(".btnCloseProfileBox").click(function () {
        $(".profilePopup").hide();
    });
}

function toggleUploadFileBox() {
    $(".imgWrapper .imgBox .link").click(function () {
        if ($(".uploadFileBox").css("display") == "none") {
            $(".uploadFileBox").show();
        } else {
            $(".uploadFileBox").hide();
        }
    });
}

function toggleChangePwdButtonPopUp() {
    $(".changePwdBox .btnEditProfile").attr("disabled", "true");
    $(".checkboxTerms").click(function () {
        if ($(".checkboxTerms").prop("checked")) {
            $(".changePwdBox .btnEditProfile").removeAttr("disabled");
        } else {
            $(".changePwdBox .btnEditProfile").attr("disabled", "true");
        }
    });
}

function closeCookiePopUp() {
    $(".closePopUpCookie").click(function () {
        $(this).parent(".buttonsCookie").parent(".cookieContainer").fadeOut("slow");
    });
}

function studentResourcesLeftNavigation() {
    $(".iPhoneMenu").click(function () {
        var obj = $(this);
        if (!$(obj).hasClass("opened")) {
            $(obj).addClass("opened");
            $(obj).removeClass("closemenu");
            $(obj).parent(".RSCNavigation").parent(".RSCWrapper").addClass("mobileNav");
        } else {
            $(obj).removeClass("opened");
            $(obj).addClass("closemenu");
            $(obj).parent(".RSCNavigation").parent(".RSCWrapper").removeClass("mobileNav");
        }
    });
}

function closefaqSearchWrapper() {
    $(".closefaqSearchWrapper").click(function () {
        $(".faqSearchWrapper").slideUp("slow");
    });
}

function closeAdditionalFilters() {
    $(".addFilterTitle").unbind().click(function (e) {
        if ($(this).next(".addFilter .listButtons").css("display") == "block") {
            return false;
        }
        $(".addFilter .listButtons").slideUp("slow");
        $(this).next(".addFilter .listButtons").slideToggle("slow");
    });
    $(document).mouseup(function (e) {
        if ($(e.toElement).hasClass("filterTextbox")) {
            return false;
        } else {
            $(".appliedFilters .addFilter").each(function () {
                if ($(this).children(".listButtons").css("display") == "block") {
                    $(this).children(".listButtons:not('.stateFilterList')").slideUp("slow");
                }
            });
        }
    });
}


function closeAdditionalZFilters() {
    $(".addZFilterTitle").unbind().click(function () {
        if ($(this).next(".zipCodeDrp .listZButtons").css("display") == "block") {
            return false;
        }
        $(".zipCodeDrp .listZButtons").slideUp("slow");
        $(this).next(".zipCodeDrp .listZButtons").slideToggle("slow");
    });
    $(document).mouseup(function (e) {
        $(".zipCodeFilters .zipCodeDrp").each(function () {
            if ($(this).children(".listZButtons").css("display") == "block") {
                $(this).children(".listZButtons").slideUp("slow");
            }
        });
    });
}


function eligibilityFormTabs() {
    $(".tab").hide();
    $(".tabLinks ul > li:first").addClass("tabActive");
    $(".tabContent .tab:first").fadeIn();

    $(".tabLinks ul li").click(function (cnt) {
        var obj = $(this);
        $(obj).parent("ul").children("li").removeClass("tabActive");
        $(obj).addClass("tabActive");
        $(obj).parent("ul").parent(".tabLinks").siblings(".tabContent").find(".tab").hide();
        var activeTab = $(obj).find("a").attr("href");
        $(activeTab).fadeIn("slow");
        $(activeTab).find(".tabWrapper").find(".tabContent").find(".tab:first").show();
        $(activeTab).find(".tabWrapper").find(".tabLinks ul > li:first").addClass("tabActive");

        if (activeTab == "#tab2" && $(".tabLinksub").css("display") == "block") {
            $(".tabLinksub ul li").each(function (cnt) {
                if (cnt > 0) {
                    $(this).removeClass("tabActive");
                }
            });
        }
        return false;
    });
}

function manageTrackPopup() {
    $(".trackPopUpLink,.tuitionReimbursementProgrssHelpTooltip").click(function (e) {
        e.preventDefault();
        $(".trackPopUpContent").hide();
        if ($(e.toElement).children(".trackPopUpContent").length > 0) {
            $(e.toElement).children(".trackPopUpContent").show();
        }
        $(this).next(".trackPopUpContent").show();
    });
    $(".closeTrackPopUpContent").click(function () {
        $(".trackPopUpContent").hide();
    });
    $(document).mouseup(function (e) {
        $(".trackPopUpContent").removeAttr("style");
    });
}

function adjustTrackBoxHeaderHeight() {
    if ($(".requestsWrapper").length > 0 && $(".requestsWrapper > .trackBox").length > 1) {
        var heightArray = new Array();
        $(".requestsWrapper > .trackBox").each(function (flg) {
            var obj = $(this);
            heightArray.push(obj.children(".trackBoxHeader").outerHeight());
        });
        $(".requestsWrapper > .trackBox > .trackBoxHeader").css("min-height", Math.max(...heightArray));
    }

}


function setTabforMobileView() {
    var winWidth = $(window).outerWidth();
    if ($(".tabWrapper").length > 0 && $(".tabLinks").length > 0) {
        $(".mobileViewTabItems").unbind().click(function () {
            var obj = $(this);
            obj.parent(".mobileViewList").parent(".tabLinks").children("ul").slideToggle();
        });
        $(".tabWrapper > .tabLinks > ul > li").click(function () {
            var obj = $(this);
            $(".mobileViewTabItems").html($(obj).children("a").html());
            $(".tabWrapper > .tabLinks > ul").removeAttr("style");
        });
    }
}

function picklistCheckBoxClickTriggers() {
    $(".selectAll").find('input[type="checkbox"]').change(function () {
        $(this).closest("ul").find("input[type=checkbox]").prop("checked", this.checked);
    });


    $(".checkboxTerms").unbind().change(function () {
        if ($(this).closest('li').attr('class') != 'selectAll') {
            if ($(this).closest("ul").find("input[type=checkbox]:checked").length == $(this).closest("ul").find('li').not('.selectAll').length) {
                if ($(this).closest("ul").find('li.selectAll').find("input[type='checkbox']").prop('checked') === true) {
                    $(this).closest("ul").find('li.selectAll').find("input[type='checkbox']").prop('checked', false);
                    return false;
                }
                else {
                    $(this).closest("ul").find('li.selectAll').find("input[type='checkbox']").prop('checked', true);
                    return true;
                }
            }
        }
    });
}

function picklistCheckBoxChangedTriggers() {
    $(".checkboxTerms").change(function () {
        if ($(this).closest('li').attr('class') != 'selectAll') {
            if ($(this).closest("ul").find("input[type=checkbox]:checked").length == $(this).closest("ul").find('li').not('.selectAll').length) {
                if ($(this).closest("ul").find('li.selectAll').find("input[type='checkbox']").prop('checked') === true) {
                    $(this).closest("ul").find('li.selectAll').find("input[type='checkbox']").prop('checked', false);
                    return false;
                }
                else {
                    $(this).closest("ul").find('li.selectAll').find("input[type='checkbox']").prop('checked', true);
                    return true;
                }
            }
        }
    });
}

function togglePicklistCheckBox() {
    $(".selectedFilter").click(function () {
        var obj = $(this);
        if (obj.next(".searchFilterList").css("display") == "block") {
            obj.next(".searchFilterList").removeAttr('style');
            return false;
        }
        else {
            $(".searchFilterList").hide();
            obj.next(".searchFilterList").show();
        }
    });

    $("header,footer,h2,.appliedFilters,.listFilters,.coursesWrapper,.assistanceBox,.breadcrumb,.EepBox").mouseup(function (e) {
        if ($(".SearchControl")) {
            $(".SearchControl").each(function () {
                var obj = $(this);
                obj.find(".searchFilterList").each(function () {
                    var childObj = $(this);
                    if (childObj.css("display") == "block") {
                        childObj.removeAttr("style");
                    }
                })
            });
        }
    });

}

function selectSkillsDC() {
    $(".degreeCalcBox .skillsBox").unbind().click(function () {
        var obj = $(this);
        if (obj.hasClass("selected")) {
            obj.removeClass("selected");
        } else {
            obj.addClass("selected");
        }
    });
}

function viewProgressDC() {
    if (winWidth < 430) {
        $(".viewProgress").unbind().on('click', function () {
            $(".planBuilderRightColumn").toggle();
            setViewProgressButtonTextDC();
        });
        setViewProgressButtonTextDC();
    }
    else {
        $(".planBuilderRightColumn").show();
    }
}

function setViewProgressButtonTextDC() {
    if ($('.planBuilderRightColumn').css('display') == 'block') {
        $(".viewProgress").addClass('compact');
        $(".viewProgress").text('');
    }
    else {
        $(".viewProgress").removeClass('compact');
        $(".viewProgress").text('View Progress');
    }
}

function degreeOptionSelectDC() {
    $(".degreeOption").click(function () {
        var obj = $(this);
        $(".degreeOption").removeClass("selected");
        if (obj.hasClass("selected")) {
            obj.removeClass("selected");
        } else {
            obj.addClass("selected");
        }
    });
}

function setDetailTMColumns() {
    $('.detailsBox.detCountHeight.col-left img').each(function () {
        $(this).load(function () {
            var he1 = $(".detailsBox.detCountHeight.col-left .programSection").outerHeight();
            var he2 = $(".detailsBox.detCountHeight.col-right .programSection").outerHeight();
            if (he1 < he2) {
                $(".detailsBox.detCountHeight.col-right").css("height", he1);
                $(".viewMorePolicies").show();
            }
        });
    });
}

function toggleSavingsReportModalDC() {
    $('.modalSavingsReportBackdrop').hide();
    $('.modalSavingsReport').hide();
    $('.modalCloseHeader').unbind().on('click', function () {
        $('.modalSavingsReportBackdrop').hide();
        $('.modalSavingsReport').hide();
    });
    $('.savingsReportReviewSection').unbind().on('click', function () {
        $('.modalSavingsReportBackdrop').show();
        $('.modalSavingsReport').show();
    });
}

function setReviewSectionSavingsReportOnScrollDC() {
    $(window).scroll(function (e) {
        if (($(window).scrollTop() + $(window).height()) < $('.container').outerHeight(true)) {
            $('.reviewSection').css({
                position: 'fixed',
                bottom: 0,
                marginBottom: 0
            });
        } else {
            $('.reviewSection').css({
                position: 'static',
                marginBottom: 40
            })
        }
    });
};

function compareProgramTableToggleColumnDC(index) {
    $('.programTabs li.active').removeClass('active');
    $('.programTabs li').eq(index).addClass('active');

    $(".savingReportsTable.tblResponsive tbody").children("tr").each(function () {
        $(this).children("td").hide();
        $(this).children("td").eq(index).show();
    });
    $(".savingReportsTable.tblResponsive thead").children("tr").each(function () {
        $(this).children("th").hide();
        $(this).children("th").eq(0).show();
        $(this).children("th").eq(index + 1).show();
    });
}

function comapreProgramSavingsReportDC() {
    if (winWidth < 430) {
        compareProgramTableToggleColumnDC(0);
    }
    else {
        $(".savingReportsTable.tblResponsive thead,.tblResponsive tbody").children("tr").each(function () {
            $(this).children("th,td").each(function (count) {
                $(this).show();
            });
        });
    }
}

function comapreProgramSavingsReportTabsClickDC() {
    $(".degreeCalcBox .programTabs a").unbind().on('click', function () {
        var index = $(this).parent().index();
        compareProgramTableToggleColumnDC(index);
    })
}


function comapreProgramDC() {
    if (winWidth < 430) {
        index = 0;
        $('.programTabs li.active').removeClass('active');
        $('.programTabs li').eq(0).addClass('active');

        $(".compareProgramDC .tblResponsive tbody").children("tr").each(function () {
            $(this).children("td").hide();
            $(this).children("td").eq(index).show();
        });
        $(".compareProgramDC .tblResponsive thead").children("tr").each(function () {
            $(this).children("th").hide();
            $(this).children("th").eq(0).show();
            $(this).children("th").eq(index + 1).show();
        })
    }
    else {
        $(".compareProgramDC .tblResponsive thead,.tblResponsive tbody").children("tr").each(function () {
            $(this).children("th,td").each(function (count) {
                $(this).show();
            });
        });
    }
}


function comapreProgramTabsClickDC() {
    $(".programTabs a").unbind().on('click', function () {
        var index = $(this).parent().index();
        $('.programTabs li.active').removeClass('active');
        $(this).parent('li').addClass('active');
        $(".compareProgramDC .tblResponsive tbody").children("tr").each(function () {
            $(this).children("td").hide();
            $(this).children("td").eq(index).show();
        });
        $(".compareProgramDC .tblResponsive thead").children("tr").each(function () {
            $(this).children("th").hide();
            $(this).children("th").eq(0).show();
            $(this).children("th").eq(index + 1).show();
        })
    })
}

function mouseEnter() {
    if ($(".disabledSavingsReport .nextButton").is('[disabled]')) {
        $(".savingsReportHelpInfo").show();
        $(".savingsReportHelpInfo").on('mouseleave', function () {
            $(this).hide();
        });
    }
}

function mouseLeave() {
    if ($(".disabledSavingsReport .nextButton").is('[disabled]')) {
        setTimeout(function () {
            if (!$(".savingsReportHelpInfo:hover").length) {
                $('.savingsReportHelpInfo').hide();
            }
        }, 300);
    }
}

function closeAdditionalTuitionAssistanceFilters() {
    $(".addTuitionAssistanceFilterTitle").unbind().click(function () {
        if ($(this).next(".tuitionAssistanceDrp .listTuitionAssistanceButtons").css("display") == "block") {
            return false;
        }
        $(".tuitionAssistanceDrp .listTuitionAssistanceButtons").slideUp("slow");
        $(this).next(".tuitionAssistanceDrp .listTuitionAssistanceButtons").slideToggle("slow");
    });
    $(document).mouseup(function (e) {
        $(".tuitionAssistanceFilters .tuitionAssistanceDrp").each(function () {
            if ($(this).children(".listTuitionAssistanceButtons").css("display") == "block") {
                $(this).children(".listTuitionAssistanceButtons").slideUp("slow");
            }
        });
    });
}

function flipCardOnClick() {
    $('.savedTupledWrapper .savedTupled').unbind().on('click', function (elm) {
        var editFlipButton = $(elm.target).attr('class');

        if (editFlipButton != 'editFlipButton') {
            $(this).toggleClass('isFlipped');
        }
        else {
            $('.savedTupled.isEditFlipped').removeClass('isEditFlipped');
            $(this).addClass('isEditFlipped');
        }
    });
}

function onAutoCompleteStateTextBoxFieldKeyUpEvent(obj) {
    var stateFieldMincharlength = 0;
    var value = obj.value.toUpperCase();
    if (value.length >= stateFieldMincharlength) {

        $(obj).parent('.addFilter').find('.listButtons').show();
        $(obj).parent('.addFilter').find('ul').find('li').hide().filter(function () {
            return $(this).find('a').text().toUpperCase().startsWith(value);
        }).show();

        var lengthVisibleItems = $(obj).parent('.addFilter').find('.listButtons').find('ul').find("li:visible").length;
        if (lengthVisibleItems == 0) {
            $(obj).parent('.addFilter').find('ul').find('li.noResult').show();
        }
        else {
            $(obj).parent('.addFilter').find('ul').find('li.noResult').hide();
        }
    }
    else {
        $(obj).parent('.addFilter').find('ul').find('li').hide();
        $(obj).parent('.addFilter').find('.listButtons').show().filter(function () {
            return !$(this).find('ul').find("li:visible").length;
        }).hide();
    }
}

function loadOtherProgramSubject(obj) {
    $(obj).parent('.addFilter').find('.listButtons').show();
    $(".elireqStateList .addFilter .listButtons li a").unbind().click(function () {
        $('.elireqStateList .addFilter .listButtons').hide();
    });

    $(document).mouseup(function (e) {
        var objdoc = $(e.toElement);
        if ($(objdoc).hasClass("elireqStateList") || $(objdoc).closest(".elireqStateList").length >= 1) {
            return false;
        } else {
            $('.elireqStateList .addFilter .listButtons').hide();
        }
    });
}


function onAutoCompleteStateTextBoxFieldBlurEvent(obj) {
    $(obj).parent('.addFilter').find(".stateFilterList").slideUp("slow");
}

function onAutoCompleteStateTextBoxFieldFocusEvent(obj) {
    $(obj).parent('.addFilter').find(".stateFilterList").slideDown("slow");
}

function closeSideMenu() {
    $('.menuCrossIconLink').on('click', function () {
        $('.leftNavigation').removeClass('overlay');
        $('.slideOutMenuOverlay').hide();
    });
    $('.slideOutMenuOverlay').on('click', function () {
        $(this).hide();
        $('.leftNavigation').removeClass('overlay');
    });
}

function openSideMenu() {
    $('.menubarBoxLink').on('click', function () {
        $('.leftNavigation').addClass('overlay');
        $('.slideOutMenuOverlay').show();
    });
}

function openDropDownButton() {
    $('.dropdownButton').on('click', function () {
        $(this).siblings('.dropdown-menu').toggleClass('show');
    })
}

function closeDropDownButton() {
    $(document).on('click', function (event) {
        var $trigger = $('.dropdownButtonBox');
        if (event.target.className == "dropdown-item added") {
            return false;
        }
        if ($trigger !== event.target && !$trigger.has(event.target).length) {
            $(".dropdown-menu.show").removeClass("show");
        } else {
            $(".dropdown-menu.show").removeClass("show");
            if ($(event.target).attr('class') == 'dropdown-item active') {
                $(event.target).closest('.dropdownButtonBox').find('.dropdown-menu').removeClass('show');
            } else {
                $(event.target).closest('.dropdownButtonBox').find('.dropdown-menu').addClass('show');
            }
        }
    });
}

function initTuitionManagementTilesCarousel() {
    $(".tuitionManagementTiles").on({ touchstart: function (event) { touchHandler(event) } });
    $(".tuitionManagementTiles").on({ touchmove: function (event) { touchHandler(event) } });
    $(".tuitionManagementTiles").on({ touchend: function (event) { touchHandler(event) } });
}

function touchHandler(event) {
    if (winWidth <= 768) {
        var touch;
        if (typeof event !== 'undefined') {
            event.preventDefault();
            if (typeof event.originalEvent.touches !== 'undefined') {
                touch = event.originalEvent.touches[0];
                switch (event.type) {
                    case 'touchstart':
                    case 'touchmove':
                        touches[event.type].x = touch.pageX;
                        touches[event.type].y = touch.pageY;
                        break;
                    case 'touchend':
                        var tiles = $('.tuitionManagementTile');
                        var indicators = $('.tuitionManagementCarouselItem');
                        var activeTile = $('.tuitionManagementTile.active');
                        var activeIndicator = $('.tuitionManagementCarouselItem.active');
                        activeTileIndex = tiles.index(activeTile);
                        if (winWidth <= 430) {
                            touches[event.type] = true;
                            if (touches.touchstart.x > -1 && touches.touchmove.x > -1) {
                                touches.direction = touches.touchstart.x < touches.touchmove.x ? "right" : "left";
                                if (touches.direction === 'left') {
                                    if (activeTileIndex < (tiles.length - 1)) {
                                        $(activeTile).removeClass('active');
                                        $(tiles).removeClass('activeBar');
                                        $(activeIndicator).removeClass('active');
                                        $(tiles[activeTileIndex + 1]).addClass('active');
                                        $(indicators[activeTileIndex + 1]).addClass('active');
                                        activeTile = $('.tuitionManagementTile.active');
                                        $(activeTile.slice(1)).addClass('activeBar');
                                        activeTileIndex = tiles.index(activeTile);
                                    }
                                }
                                else {
                                    if (activeTileIndex > 0) {
                                        $(activeTile).removeClass('active');
                                        $(tiles).removeClass('activeBar');
                                        $(tiles[activeTileIndex - 1]).addClass('active');
                                        $(activeIndicator).removeClass('active');
                                        $(indicators[activeTileIndex - 1]).addClass('active');
                                        activeTile = $('.tuitionManagementTile.active');
                                        $(activeTile.slice(1)).addClass('activeBar');
                                        activeTileIndex = tiles.index(activeTile);
                                    }
                                }
                            }
                        }
                        else if (winWidth > 430 && winWidth <= 768) {
                            touches[event.type] = true;
                            if (touches.touchstart.x > -1 && touches.touchmove.x > -1) {
                                touches.direction = touches.touchstart.x < touches.touchmove.x ? "right" : "left";
                                if (touches.direction === 'left') {
                                    if (activeTileIndex < ((tiles.length / 2))) {
                                        $(activeTile).removeClass('active');
                                        $(tiles).removeClass('activeBar');
                                        $(tiles[activeTileIndex + 1]).removeClass('active');
                                        $(activeIndicator).removeClass('active');
                                        $(indicators[activeTileIndex + 1]).addClass('active');
                                        $(tiles[activeTileIndex + 2]).addClass('active');
                                        $(tiles[activeTileIndex + 3]).addClass('active');
                                        activeTile = $('.tuitionManagementTile.active');
                                        $(activeTile.slice(1)).addClass('activeBar');
                                        activeTileIndex = tiles.index(activeTile);
                                    }
                                }
                                else {
                                    if (activeTileIndex > 0) {
                                        $(activeTile).removeClass('active');
                                        $(tiles).removeClass('activeBar');
                                        $(activeIndicator).removeClass('active');
                                        $(tiles[activeTileIndex - 1]).addClass('active');
                                        $(indicators[activeTileIndex - 2]).addClass('active');
                                        $(tiles[activeTileIndex - 2]).addClass('active');
                                        activeTile = $('.tuitionManagementTile.active');
                                        $(activeTile.slice(1)).addClass('activeBar');
                                        activeTileIndex = tiles.index(activeTile);
                                    }
                                }
                            }
                        }
                        break;
                    default:
                        break;
                }
            }
        }
    }
}

function destroyTuitionManagementTilesCarousel() {
    $(".tuitionManagementTiles").off('touchstart');
    $(".tuitionManagementTiles").off('touchmove');
    $(".tuitionManagementTiles").off('touchend');
}

function setDefaultTuitionManagementCarouselItem() {
    var tiles = $('.tuitionManagementTile');
    var indicators = $('.tuitionManagementCarouselItem');
    var activeTile = $('.tuitionManagementTile.active');
    var activeIndicator = $('.tuitionManagementCarouselItem.active');
    activeTileIndex = 0;
    if (winWidth <= 430) {
        $(activeTile).removeClass('active');
        $(activeIndicator).removeClass('active');
        $(tiles).eq(0).addClass('active');
        $(indicators).eq(0).addClass('active');
    }
    else if (winWidth > 430 && winWidth <= 768) {
        $(activeTile).removeClass('active');
        $(activeIndicator).removeClass('active');
        $(tiles).removeClass('activeBar');
        $(tiles).eq(0).addClass('active');
        $(indicators).eq(0).addClass('active');
        $(tiles).eq(1).addClass('active');
        activeTile = $('.tuitionManagementTile.active');
        $(activeTile.slice(1)).addClass('activeBar');
    }
    else if (winWidth > 768) {
        $(tiles).addClass('active');
        activeTile = $('.tuitionManagementTile.active');
        $(activeTile.slice(1)).addClass('activeBar');
    }
}

function onTuitionManagementCarouselItemClickEvent() {
    $('.tuitionManagementCarouselItem').on('click', function () {
        var slide = $(this).attr('data-target').split('-')[1] - 1;
        $('.tuitionManagementCarouselItem.active').removeClass('active');
        $('.tuitionManagementTile.active').removeClass('active');
        $('.tuitionManagementTile.activeBar').removeClass('activeBar');
        $(this).addClass('active');
        if (winWidth <= 430) {
            $('.tuitionManagementTile').eq(slide).addClass('active');
        }
        else if (winWidth > 430 && winWidth <= 768) {
            $('.tuitionManagementTile').eq(slide * 2).addClass('active');
            $('.tuitionManagementTile').eq((slide * 2) + 1).addClass('active');
            var activeTile = $('.tuitionManagementTile.active');
            $(activeTile.slice(1)).addClass('activeBar');
        }
    })
}

function onFavoriteProgramGridListDropDownClickEvent() {
    $('.favoriteProgramGridListBox').find('.dropdown-item').on('click', function () {
        $(this).closest('.dropdownButtonBox').find('.dropdownButton')[0].firstChild.data = $(this).text();
        $(this).closest('.dropdown-menu').find('.dropdown-item.active').removeClass('active');
        $(this).closest('.dropdown-menu').removeClass("show");
        $(this).addClass('active');

        if ($(this).text() == 'List') {
            $('.favoriteProgramsGrid').addClass('ListView');
        } else {
            $('.favoriteProgramsGrid').removeClass('ListView');
        }
    })
}

function onSubItemBoxClickEvent() {
    $('.subItemBox').on('click', function () {
        var currentObj = $(this);
        currentObj.closest('ul').find('li').not(this).hide();
        currentObj.children('a').hide();
        currentObj.find('.subMenuItem').show();
        currentObj.find('.subMenuItem').find('li').show();
        currentObj.css('background', 'transparent');
        currentObj.css('padding', 0);
    });
}

function onSubMenuBackButtonClickEvent() {
    $('.subMenuBackButton').on('click', function (e) {
        var currentObj = $(this);
        currentObj.parent('.subMenuItem').hide();
        currentObj.closest('.subItemBox').children('a').show();
        currentObj.closest('.subItemBox').removeAttr('style');
        currentObj.closest('.slideOutMenuItems').find('ul').find('li').show();
        e.preventDefault();
        e.stopPropagation();
    })
}

function onFooterArrowBoxCLickEvent(currentObj) {
    $(currentObj).find('.footerArrowUp').toggleClass('down');
    $(currentObj).closest('.courseDivTile').find('.detailCourseContentBox').slideToggle();
    $(currentObj).closest('.courseDivTile').find('.detailCourseContentBox .detailCourseContent .detailCourseContentRow:visible:last').css('border-bottom','0');
    setTimeout(() => {
        adjustSearchFilterScrollBar();
    }, 400);
}

function onFavoriteProgramFooterArrowBoxCLickEvent(currentObj) {
    $(currentObj).find('.footerArrowUp').toggleClass('down');
    $(currentObj).closest('.favoriteProgramsGridItem').find('.detailCourseContentBox').slideToggle();
}

function onMyFilterTitleLinkEvent() {
    $('.myFilterTitleLink').on('click', function () {
        var currentObj = $(this);
        currentObj.closest('.myFiltersBox').addClass('modal');
    })
}

function onMyFilterModalTitleCloseEvent() {
    $('.myFilterModalTitleClose').on('click', function () {
        var currentObj = $(this);
        currentObj.closest('.myFiltersBox').removeClass('modal');
    })
}

function onSuccessErrorMessageCloseButtonBoxClickEvent() {
    $('.successErrorMessageCloseButtonBox').on('click', function () {
        var currentObj = $(this);
        currentObj.closest('.successErrorMessageBoxFooter,.errorMsgWrapper,.successErrorMessageBoxFooternoBookmark').hide();
    });
}

function closeBackEndErrorMessage() {
    $(".errorContainer").click(function () {
        $(".errorContainer > span > span").remove();
    });
}

function onbookmarkIconClickEvent(currentObj, messageText) {
    var currentObj = $(currentObj);
    var successTooltip = '<span class="successTooltip">' + messageText + '</span>'
    if (currentObj.hasClass("added")) {
        currentObj.removeClass("added");
        return false;
    }
    currentObj.closest('.courseDivTile').prepend(successTooltip);
    currentObj.closest('.courseDivTile').find('.successTooltip').show().delay(5000).hide(0);
    $('.successErrorMessageBoxFooter').css('display', 'flex');//.delay(10000).hide(0);
    currentObj.toggleClass('added');
}


function onFavoriteProgramBookmarkIconClickEvent(currentObj, messageText) {
    var currentObj = $(currentObj);
    var successTooltip = '<span class="successTooltip">' + messageText + '</span>'
    if (currentObj.hasClass("added")) {
        currentObj.removeClass("added");
        return false;
    }
    currentObj.closest('.favoriteProgramsGridItemContentBox').prepend(successTooltip);
    currentObj.closest('.favoriteProgramsGridItemContentBox').find('.successTooltip').show(); //.delay(1000).hide(0);
    currentObj.toggleClass('added');
}

function openTuitionReimbursementModal() {
    $('.tuitionReimbursementModal').css('display', 'block');
    $('body').css('overflow', 'hidden');
}

function closeopenTuitionReimbursementModal() {
    $('.tuitionReimbursementModal').hide();
    $('body').removeAttr('style');
}

function showZipCodeErrorMessage() {
    $('.errorMsgWrapper').css('display', 'flex');
}

function onClickSearchProgramsTabsDropdown() {
    $('.searchProgramTabs ul').slideToggle();
    if ($(".searchProgramTabs ul").is(":visible")) {
        $(".searchProgramTabs ul").css("display", "flex");
    }
}

function activateSearchProgramTabs() {
    $('.searchProgramTabs li').on('click', function () {
        var currentObj = $(this).find('a');
        var activeTabIndex = currentObj.attr('data-target').split('-')[1];

        if ($(this).hasClass('noSearchProgramTab')) {
            $('.noSearchProgramModal').filter(function () {
                return $(this).attr('data-target') == currentObj.attr('data-target');
            }).css('display', 'flex');
        } else {
            $('.searchProgramTabContent.active').removeClass('active');
            $('.searchProgramTabContent').eq(activeTabIndex - 1).addClass('active');
            $('.searchProgramTabs li.active').removeClass('active');
            currentObj.closest('li').addClass('active');

            $('.searchProgramTabs .mobileViewSearchProgramsTabLink').html(currentObj.text());
            $(".searchProgramTabs ul").removeAttr("style");
        }
    })
}

function toggleSearchFilterSideBar(currentObj) {
    $(currentObj).toggleClass('expanded');
    $('.searchFilterBox').toggleClass('expanded');
    if ($('.searchFilterBox').hasClass('expanded')) {
        $('.searchFilterBox').closest('.searchFilterWrapper').find('.coursesWrapper.searchWrapper').css('width', '73%');
    } else {
        $('.searchFilterBox').closest('.searchFilterWrapper').find('.coursesWrapper.searchWrapper').css('width', '100%');
    }
    $(currentObj).closest('.coursesWrapper').find('.coursesContainer').toggleClass('expanded');
    hideBodyOverflow();
    if ($('.searchFilterWrapper .searchFilterBox .searchFilterAppliedFilter .searchFilterClearBlue:visible').length == 0) {
        $('.searchFilterWrapper .searchFilterBox .searchFilterAppliedFilter .searchFilterClearLight').hide();
    }
    else {
        $('.searchFilterWrapper .searchFilterBox .searchFilterAppliedFilter .searchFilterClearLight').css('display', 'flex');
    }
    adjustSearchFilterScrollBar();
}

function onSearchFilterCollpaseTitleClickEvent(currentObj) {
    $(currentObj).toggleClass('collapsed');
    if ($(currentObj).hasClass('collapsed')) {
        $(currentObj).parent().children().not(currentObj).slideUp();
    } else {
        $(currentObj).parent().children().not(currentObj).removeClass('collapsed');
        $(currentObj).parent().children().not(currentObj).slideDown();
    }
    var totalAppliedFilters = $('.searchFilterWrapper .searchFilterBox .searchFilterAppliedFilter .searchFilterClearBlue:visible').length;
    var totalVisibleAppliedFiltersLength = $('.searchFilterWrapper .searchFilterBox .searchFilterAppliedFilter .searchFilterClearBlue:visible').length;
    $('.searchFilterWrapper .searchFilterBox .searchFilterBoxSubTitle').html(totalAppliedFilters + ' Filters Applied');
    if (totalAppliedFilters == 0 || totalVisibleAppliedFiltersLength == 0) {
        $('.searchFilterAppliedFilter .searchFilterClearLight').hide();
    } else {
        $('.searchFilterAppliedFilter .searchFilterClearLight').show();
    }
}

function closeSearchFilterModal() {
    $('.searchFilterBox').removeClass('expanded');
    $('.btnSearchFilters.expanded,.coursesContainer.expanded').removeClass('expanded');
    $('body').removeAttr('style');
    if ($('.searchFilterBox').hasClass('expanded')) {
        $('.searchFilterBox').closest('.searchFilterWrapper').find('.coursesWrapper.searchWrapper').css('width', '73%');
    } else {
        $('.searchFilterBox').closest('.searchFilterWrapper').find('.coursesWrapper.searchWrapper').css('width', '100%');
    }
}

function hideBodyOverflow() {
    if ($('.searchFilterBox').hasClass('expanded')) {
        if (winWidth <= 1024) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').removeAttr('style');
        }
    } else {
        if ($('.tuitionReimbursementModal').css('display') == 'block') {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').removeAttr('style');
        }
    }
}

function onClickGridListSearchResult(mode) {
    if (mode == 'list') {
        $('.searchProgramTabContent').eq(0).find('.searchWrapper .coursesContainer.gridView').removeClass('gridView');
        $('.searchProgramTabContent').eq(0).find('.searchWrapper .coursesContainer').addClass('listView');
        $('.searchProgramTabContent').eq(0).find('.searchWrapper .gridListSymbols .gridSymbol').removeClass('active');
        $('.searchProgramTabContent').eq(0).find('.searchWrapper .gridListSymbols .listSymbol').addClass('active');
        $('.searchProgramTabContent').eq(0).find('.searchWrapper.coursesWrapper').css('padding', '0 10px');
    } else {
        $('.searchProgramTabContent').eq(0).find('.searchWrapper .coursesContainer.listView').removeClass('listView');
        $('.searchProgramTabContent').eq(0).find('.searchWrapper .coursesContainer').addClass('gridView');
        $('.searchProgramTabContent').eq(0).find('.searchWrapper .gridListSymbols .listSymbol').removeClass('active');
        $('.searchProgramTabContent').eq(0).find('.searchWrapper .gridListSymbols .gridSymbol').addClass('active');
        $('.searchProgramTabContent').eq(0).find('.searchWrapper.coursesWrapper').css('padding', '0');
    }
}


function closeNoSearchProgramModal(currentObj) {
    $(currentObj).closest('.noSearchProgramModal').hide();
}

function onSearchCheckboxChangeCalculateAppliedFilter() {
    $('.actualSearchFilters .searchFilterItem .checkboxTerms').unbind().on('change', function () {
        var currObj = $(this);
        var isChecked = currObj.prop('checked');
        var appliedFilterTitle;
        var attrDataId = (currObj.attr("data-id") == null || currObj.attr("data-id") == undefined) ? currObj.attr("id") : currObj.attr("data-id");

        if (currObj.closest('.searchFilterItem').closest('.searchFilterCollapsibleContent').prev().hasClass('stateFilterTextBox')) {
            appliedFilterTitle = currObj.closest('.searchFilterItem').closest('.searchFilterCollapsibleContent').prev().prev().attr('data-appliedfiltertitle');
        } else {
            appliedFilterTitle = currObj.closest('.searchFilterItem').closest('.searchFilterCollapsibleContent').prev().attr('data-appliedfiltertitle');
        }
        var appliedFilterLabelContent = currObj.closest('.CheckBox').find('label').contents().get(0).textContent.replace(/\s+/g, ' ').trim();
        var matchFilterTitle = $('.searchFilterAppliedFilter .searchFilterCollapseItemTitle').filter(function () {
            return $(this).attr('data-appliedfiltertitle').replace(/\s+/g, ' ').trim() == appliedFilterTitle.replace(/\s+/g, ' ').trim();
        });
        if (matchFilterTitle.length > 0) {
            //Single Checkbox without hierarchy
            var matchSelectedFilterItem = $(matchFilterTitle[0]).next('.searchFilterCollapsibleContent').find('.searchFilterClearBlue').filter(function () {
                return $(this).contents().get(0).textContent.replace(/\s+/g, ' ').trim() == appliedFilterLabelContent.replace(/\s+/g, ' ').trim();
            })
            if (matchSelectedFilterItem.length > 0) {
                if (isChecked) {
                    $(matchSelectedFilterItem[0]).removeClass('hide');
                }
                else {
                    $(matchSelectedFilterItem[0]).addClass('hide');
                }
            }
            if (matchFilterTitle.length > 0) {
                if (isChecked) {
                    $(matchFilterTitle[0]).removeClass('hide');
                }
                else {
                    $(matchFilterTitle[0]).addClass('hide');
                }
            }
        }
        if (matchFilterTitle.length > 0) {
            if (currObj.closest('.Level3CheckboxRow').length > 0) {
                //Level 3 checkbox
                console.log('level 3 checkbox');
                var level3Checkboxes = currObj.closest('.Level3CheckboxRow').find('.CheckBox:not(".lidisabled")');
                var level2Checkboxes = currObj.closest('.Level2CheckboxRow').find('.CheckBox:not(".lidisabled")');
                if (isChecked) {
                    //Check level 2 checkbox
                    if (level3Checkboxes.find('.checkboxTerms:checked').length > 0) {
                        currObj.closest('.Level3CheckboxRow').prev('.CheckBox').find('.checkboxTerms').prop('checked', true);
                        var level2CheckboxTitle = currObj.closest('.Level3CheckboxRow').prev('.CheckBox').find('label').contents().get(0).textContent.replace(/\s+/g, ' ').trim();
                        var matchSelectedFilterItem = $(matchFilterTitle[0]).next('.searchFilterCollapsibleContent').find('.searchFilterClearBlue').filter(function () {
                            return $(this).contents().get(0).textContent.replace(/\s+/g, ' ').trim() == level2CheckboxTitle.replace(/\s+/g, ' ').trim();
                        })
                        if (matchSelectedFilterItem.length > 0) {
                            $(matchSelectedFilterItem[0]).removeClass('hide');
                        }
                        //Check level 1 checkbox
                        currObj.closest('.searchFilterItem').children('.Level1CheckboxRow').children('.CheckBox').find('.checkboxTerms').prop('checked', true);
                        var level1CheckboxTitle = currObj.closest('.Level2CheckboxRow').prev('.CheckBox').find('label').contents().get(0).textContent.replace(/\s+/g, ' ').trim();
                        var matchSelectedFilterItem = $(matchFilterTitle[0]).next('.searchFilterCollapsibleContent').find('.searchFilterClearBlue').filter(function () {
                            return $(this).contents().get(0).textContent.replace(/\s+/g, ' ').trim() == level1CheckboxTitle.replace(/\s+/g, ' ').trim();
                        })
                        if (matchSelectedFilterItem.length > 0) {
                            $(matchSelectedFilterItem[0]).removeClass('hide');
                        }
                    }
                }
                else {

                    //Now if all level 3 checkbox unchecked then we need to uncheck level 2
                    // if (level3Checkboxes.find('.checkboxTerms:checked').length == 0) {
                // currObj.closest('.Level3CheckboxRow').prev('.CheckBox').find('.checkboxTerms').prop('checked', false);
                // var level2CheckboxTitle = currObj.closest('.Level3CheckboxRow').prev('.CheckBox').find('label').contents().get(0).textContent.replace(/\s+/g, ' ').trim();
                // var matchSelectedFilterItem = $(matchFilterTitle[0]).next('.searchFilterCollapsibleContent').find('.searchFilterClearBlue').filter(function () {
                //     return $(this).contents().get(0).textContent.replace(/\s+/g, ' ').trim() == level2CheckboxTitle.replace(/\s+/g, ' ').trim();
                // })
                // if (matchSelectedFilterItem.length > 0) {
                //     $(matchSelectedFilterItem[0]).addClass('hide');
                // }
                    //     currObj.closest('.Level3CheckboxRow').slideUp();
                    //     currObj.closest('.Level3CheckboxRow').prev('.CheckBox').find('.arrowdown').addClass('up');

                    //     //Now if all level 2 checkbox unchecked then we need to uncheck level 1
                    //     if (level2Checkboxes.find('.checkboxTerms:checked').length == 0) {
                    //         currObj.closest('.Level2CheckboxRow').prev('.CheckBox').find('.checkboxTerms').prop('checked', false);
                    //         var level1CheckboxTitle = currObj.closest('.Level2CheckboxRow').prev('.CheckBox').find('label').contents().get(0).textContent.replace(/\s+/g, ' ').trim();
                //     var matchSelectedFilterItem = $(matchFilterTitle[0]).next('.searchFilterCollapsibleContent').find('.searchFilterClearBlue').filter(function () {
                //         return $(this).contents().get(0).textContent.replace(/\s+/g, ' ').trim() == level1CheckboxTitle.replace(/\s+/g, ' ').trim();
                //     })
                //     if (matchSelectedFilterItem.length > 0) {
                //         $(matchSelectedFilterItem[0]).addClass('hide');
                //     }
                    //         currObj.closest('.Level2CheckboxRow').slideUp();
                    //         currObj.closest('.Level2CheckboxRow').prev('.CheckBox').find('.arrowdown').addClass('up');
                    //     }
                // }

                    }


                //Now all level 2 checkboxes checked then we need to check level 1 checkbox
                var level2Checkboxes = currObj.closest('.Level2CheckboxRow').children('.CheckBox:not(".lidisabled")');
                if (level2Checkboxes.find('.checkboxTerms:checked').length == level2Checkboxes.length) {
                    currObj.closest('.Level2CheckboxRow').prev('.CheckBox').find('.checkboxTerms').prop('checked', true);
                    var level1CheckboxTitle = currObj.closest('.Level2CheckboxRow').prev('.CheckBox').find('label').contents().get(0).textContent.replace(/\s+/g, ' ').trim();
                    var matchSelectedFilterItem = $(matchFilterTitle[0]).next('.searchFilterCollapsibleContent').find('.searchFilterClearBlue').filter(function () {
                        return $(this).contents().get(0).textContent.replace(/\s+/g, ' ').trim() == level1CheckboxTitle.replace(/\s+/g, ' ').trim();
                    })
                    if (matchSelectedFilterItem.length > 0) {
                        $(matchSelectedFilterItem[0]).removeClass('hide');
                    }

                    var matchSelectedFilterItemFirstLevel = currObj.closest('.Level2CheckboxRow').prev('.CheckBox').find('label').contents().get(0).textContent.replace(/\s+/g, ' ').trim();
                    var matchSelectedFilterItem = $(matchFilterTitle[0]).next('.searchFilterCollapsibleContent').find('.searchFilterClearBlue').filter(function () {
                        return $(this).contents().get(0).textContent.replace(/\s+/g, ' ').trim() == matchSelectedFilterItemFirstLevel.replace(/\s+/g, ' ').trim();
                    })
                    if (matchSelectedFilterItem.length > 0) {
                        $(matchSelectedFilterItem[0]).removeClass('hide');
                    }

                }
            }
            else if (currObj.closest('.Level2CheckboxRow').length > 0) {
                //Level 2 checkbox
                console.log('level 2 checkbox');
                var level2Checkboxes = currObj.closest('.Level2CheckboxRow').children('.CheckBox:not(".lidisabled")');
                if (isChecked) {
                    //Check level 1 checkbox
                    if (level2Checkboxes.find('.checkboxTerms:checked').length > 0) {
                        currObj.closest('.Level2CheckboxRow').prev('.CheckBox').find('.checkboxTerms').prop('checked', true);
                        var level1CheckboxTitle = currObj.closest('.Level2CheckboxRow').prev('.CheckBox').find('label').contents().get(0).textContent.replace(/\s+/g, ' ').trim();
                        var matchSelectedFilterItem = $(matchFilterTitle[0]).next('.searchFilterCollapsibleContent').find('.searchFilterClearBlue').filter(function () {
                            return $(this).contents().get(0).textContent.replace(/\s+/g, ' ').trim() == level1CheckboxTitle.replace(/\s+/g, ' ').trim();
                        })
                        if (matchSelectedFilterItem.length > 0) {
                            $(matchSelectedFilterItem[0]).removeClass('hide');
                        }
                    }
                    currObj.closest('.CheckBox').next('.Level3CheckboxRow').slideDown();
                    currObj.closest('.CheckBox').find('.arrowdown').removeClass('up');
                }
                else {
                    currObj.closest('.CheckBox').next('.Level3CheckboxRow').slideUp();
                    currObj.closest('.CheckBox').find('.arrowdown').addClass('up');

                    var level3Checkboxes = currObj.closest('.CheckBox').next('.Level3CheckboxRow').find('.CheckBox:not(".lidisabled")');
                    level3Checkboxes.each(function () {
                        $(this).find('.checkboxTerms').prop('checked', false);
                        var level3CheckboxTitle = $(this).find('label').contents().get(0).textContent.replace(/\s+/g, ' ').trim();
                        var matchSelectedFilterItem = $(matchFilterTitle[0]).next('.searchFilterCollapsibleContent').find('.searchFilterClearBlue').filter(function () {
                            return $(this).contents().get(0).textContent.replace(/\s+/g, ' ').trim() == level3CheckboxTitle.replace(/\s+/g, ' ').trim();
                        })
                        if (matchSelectedFilterItem.length > 0) {
                            $(matchSelectedFilterItem[0]).addClass('hide');
                        }
                    });


                    //Now if all level 2 checkbox unchecked then we need to uncheck level 1
                    // if (level2Checkboxes.find('.checkboxTerms:checked').length == 0) {
                    //     currObj.closest('.Level2CheckboxRow').prev('.CheckBox').find('.checkboxTerms').prop('checked', false);
                    //     var level1CheckboxTitle = currObj.closest('.Level2CheckboxRow').prev('.CheckBox').find('label').contents().get(0).textContent.replace(/\s+/g, ' ').trim();
                    //     var matchSelectedFilterItem = $(matchFilterTitle[0]).next('.searchFilterCollapsibleContent').find('.searchFilterClearBlue').filter(function () {
                    //         return $(this).contents().get(0).textContent.replace(/\s+/g, ' ').trim() == level1CheckboxTitle.replace(/\s+/g, ' ').trim();
                    //     })
                    //     if (matchSelectedFilterItem.length > 0) {
                    //         $(matchSelectedFilterItem[0]).addClass('hide');
                    //     }
                    //     currObj.closest('.Level2CheckboxRow').slideUp();
                    //     currObj.closest('.Level2CheckboxRow').prev('.CheckBox').find('.arrowdown').addClass('up');
                    // }

                }
                if (level2Checkboxes.find('.checkboxTerms:checked').length == level2Checkboxes.length) {
                    currObj.closest('.Level2CheckboxRow').prev('.CheckBox').find('.checkboxTerms').prop('checked', true);
                    var level1CheckboxTitle = currObj.closest('.Level2CheckboxRow').prev('.CheckBox').find('label').contents().get(0).textContent.replace(/\s+/g, ' ').trim();
                    var matchSelectedFilterItem = $(matchFilterTitle[0]).next('.searchFilterCollapsibleContent').find('.searchFilterClearBlue').filter(function () {
                        return $(this).contents().get(0).textContent.replace(/\s+/g, ' ').trim() == level1CheckboxTitle.replace(/\s+/g, ' ').trim();
                    })
                    if (matchSelectedFilterItem.length > 0) {
                        $(matchSelectedFilterItem[0]).removeClass('hide');
                    }
                }



            }
            else if (currObj.closest('.Level1CheckboxRow').length > 0 && currObj.closest('.CheckBox').next('.Level2CheckboxRow').length > 0) {
                //Level 1 checkbox
                console.log('level 1 checkbox');
                if (isChecked) {
                    currObj.closest('.CheckBox').next('.Level2CheckboxRow').slideDown();
                    currObj.closest('.CheckBox').find('.arrowdown').removeClass('up');
                }
                else {
                    currObj.closest('.searchFilterItem').find('.Level2CheckboxRow').slideUp();
                    currObj.closest('.Level2CheckboxRow').find('.Level3CheckboxRow').addClass('up');
                    currObj.closest('.Level2CheckboxRow').find('.arrowdown').addClass('up');
                    currObj.closest('.CheckBox').find('.arrowdown').addClass('up');

                    currObj.closest('.searchFilterItem').find('.CheckBox:not(".lidisabled")').each(function () {
                        var filterItemLabel = $(this).find('label').contents().get(0).textContent.replace(/\s+/g, ' ').trim();
                        var matchSelectedFilterItem = $(matchFilterTitle[0]).next('.searchFilterCollapsibleContent').find('.searchFilterClearBlue').filter(function () {
                            return $(this).contents().get(0).textContent.replace(/\s+/g, ' ').trim() == filterItemLabel.replace(/\s+/g, ' ').trim();
                        })
                        if (matchSelectedFilterItem.length > 0) {
                            $(matchSelectedFilterItem[0]).addClass('hide');
                        }
                        $(this).find('.checkboxTerms').prop('checked', false);
                    });
                }
            }
            else {
                console.log('No condition matched');
            }
        }

        var totalAppliedFilters = $('.searchFilterWrapper .searchFilterBox .searchFilterAppliedFilter .searchFilterClearBlue:visible').length;
        $('.searchFilterWrapper .searchFilterBox .searchFilterBoxSubTitle').html(totalAppliedFilters + ' Filters Applied');
        if (totalAppliedFilters == 0) {
            $('.searchFilterAppliedFilter .searchFilterClearLight').hide();
        } else {
            $('.searchFilterAppliedFilter .searchFilterClearLight').show();
        }
    });

    $('.actualSearchFilters .searchFilterItem .radioTerms').unbind().on('change', function () {
        var currObj = $(this);
        var isChecked = currObj.prop('checked');
        var appliedFilterTitle;
        var attrDataId = (currObj.attr("data-id") == null || currObj.attr("data-id") == undefined) ? currObj.attr("id") : currObj.attr("data-id");

        if (currObj.closest('.searchFilterItem').closest('.searchFilterCollapsibleContent').prev().hasClass('stateFilterTextBox')) {
            appliedFilterTitle = currObj.closest('.searchFilterItem').closest('.searchFilterCollapsibleContent').prev().prev().attr('data-appliedfiltertitle');
        } else {
            appliedFilterTitle = currObj.closest('.searchFilterItem').closest('.searchFilterCollapsibleContent').prev().attr('data-appliedfiltertitle');
        }
        var appliedFilterLabelContent = currObj.closest('.CheckBox').find('label').contents().get(0).textContent.replace(/\s+/g, ' ').trim();
        var matchFilterTitle = $('.searchFilterAppliedFilter .searchFilterCollapseItemTitle').filter(function () {
            return $(this).attr('data-appliedfiltertitle').replace(/\s+/g, ' ').trim() == appliedFilterTitle.replace(/\s+/g, ' ').trim();
        });
        if (matchFilterTitle.length > 0) {
            if (matchFilterTitle.length > 0) {
                if (isChecked) {
                    $(matchFilterTitle[0]).removeClass('hide');
                }
                else {
                    $(matchFilterTitle[0]).addClass('hide');
                }
            }

            var matchSelectedFilterItem = $(matchFilterTitle[0]).next('.searchFilterCollapsibleContent').find('.searchFilterClearBlue').filter(function () {
                return $(this).contents().get(0).textContent.replace(/\s+/g, ' ').trim() == appliedFilterLabelContent.replace(/\s+/g, ' ').trim();
            });
            if (matchSelectedFilterItem.length > 0) {
                $(matchFilterTitle[0]).next('.searchFilterCollapsibleContent').find('.searchFilterClearBlue').not($(matchSelectedFilterItem[0])).addClass('hide');
                if (isChecked) {
                    $(matchSelectedFilterItem[0]).removeClass('hide');
                }
                else {
                    $(matchSelectedFilterItem[0]).addClass('hide');
                }
            }
        }

        var totalAppliedFilters = $('.searchFilterWrapper .searchFilterBox .searchFilterAppliedFilter .searchFilterClearBlue:visible').length;
        $('.searchFilterWrapper .searchFilterBox .searchFilterBoxSubTitle').html(totalAppliedFilters + ' Filters Applied');
        if (totalAppliedFilters == 0) {
            $('.searchFilterAppliedFilter .searchFilterClearLight').hide();
        } else {
            $('.searchFilterAppliedFilter .searchFilterClearLight').show();
        }
    });
}

function onclickExpandCollapseActualFilterItems() {
    $(document).on('click', '.searchFilterItem .arrowdown', function () {
        var currObj = $(this);
        if (currObj.closest('.Level2CheckboxRow').length > 0) {//Level 2 Checkbox
            currObj.closest('.CheckBox').next('.Level3CheckboxRow').slideToggle();
        } else {//Level 1 checkbox
            currObj.closest('.CheckBox').next('.Level2CheckboxRow').slideToggle();
        }
        currObj.toggleClass('up');
    });
}

function removeIndividualSearchAppliedFilter() {
    $(document).on('click', '.searchClearAllIconBlue', function () {
        var currObj = $(this);
        var FilterTextContent = currObj.parent().contents().get(0).textContent.replace(/\s+/g, ' ').trim();
        var filterTitle = currObj.closest('.searchFilterCollapsibleContent').prev('.searchFilterCollapseItemTitle').attr('data-appliedfiltertitle');
        var matchFilterTitle = $('.actualSearchFilters').find('.searchFilterCollapseItemTitle').filter(function () {
            return $(this).attr('data-appliedfiltertitle').replace(/\s+/g, ' ').trim() == filterTitle.replace(/\s+/g, ' ').trim()
        });
        var matchCheckBox = $(matchFilterTitle[0]).next('.searchFilterCollapsibleContent').find('.CheckBox:not(".lidisabled")').filter(function () {
            return $(this).find('label').contents().get(0).textContent.replace(/\s+/g, ' ').trim() == FilterTextContent.replace(/\s+/g, ' ').trim()
        });
        $(matchCheckBox[0]).find('.checkboxTerms').prop('checked', false);
        $(matchCheckBox[0]).find('.radioTerms').prop('checked', false);


        if (matchCheckBox.length > 0) {
            if ($(matchCheckBox[0]).closest('.Level3CheckboxRow').length > 0) {
                //Level 3 checkbox
                console.log('level 3 checkbox');
                var level3Checkboxes = $(matchCheckBox[0]).closest('.Level3CheckboxRow').find('.CheckBox');
                var level2Checkboxes = $(matchCheckBox[0]).closest('.Level2CheckboxRow').find('.CheckBox');
                //Now if all level 3 checkbox unchecked then we need to uncheck level 2
                // if (level3Checkboxes.find('.checkboxTerms:checked').length == 0) {
                //     $(matchCheckBox[0]).closest('.Level3CheckboxRow').prev('.CheckBox').find('.checkboxTerms').prop('checked', false);
                //     var level2CheckboxTitle = $(matchCheckBox[0]).closest('.Level3CheckboxRow').prev('.CheckBox').find('label').contents().get(0).textContent.replace(/\s+/g, ' ').trim();
                //     var matchSelectedFilterItem = currObj.closest('.searchFilterCollapsibleContent').find('.searchFilterClearBlue').filter(function () {
                //         return $(this).contents().get(0).textContent.replace(/\s+/g, ' ').trim() == level2CheckboxTitle.replace(/\s+/g, ' ').trim();
                //     })
                //     if (matchSelectedFilterItem.length > 0) {
                //         $(matchSelectedFilterItem[0]).addClass('hide');
                //     }
                //     $(matchCheckBox[0]).closest('.Level3CheckboxRow').slideUp();
                //     $(matchCheckBox[0]).closest('.Level3CheckboxRow').prev('.CheckBox').find('.arrowdown').addClass('up');


                //     //Now if all level 2 checkboes unchecked then need to uncheck Level 1
                //     if (level2Checkboxes.find('.checkboxTerms:checked').length == 0) {
                //         $(matchCheckBox[0]).closest('.Level3CheckboxRow').prev('.CheckBox').find('.checkboxTerms').prop('checked', false);
                //         var level1CheckboxTitle = $(matchCheckBox[0]).closest('.Level3CheckboxRow').prev('.CheckBox').find('label').contents().get(0).textContent.replace(/\s+/g, ' ').trim();
                //         var matchSelectedFilterItem = currObj.closest('.searchFilterCollapsibleContent').find('.searchFilterClearBlue').filter(function () {
                //             return $(this).contents().get(0).textContent.replace(/\s+/g, ' ').trim() == level1CheckboxTitle.replace(/\s+/g, ' ').trim();
                //         })
                //         if (matchSelectedFilterItem.length > 0) {
                //             $(matchSelectedFilterItem[0]).addClass('hide');
                //         }
                //         $(matchCheckBox[0]).closest('.Level2CheckboxRow').slideUp();
                //         $(matchCheckBox[0]).closest('.Level2CheckboxRow').prev('.CheckBox').find('.arrowdown').addClass('up');
                //     }

                // }
            }
            else if ($(matchCheckBox[0]).closest('.Level2CheckboxRow').length > 0) {
                //Level 2 checkbox
                console.log('level 2 checkbox');
                //Remove level 3
                var level3Checkbox = $(matchCheckBox[0]).next('.Level3CheckboxRow').children('.CheckBox');
                level3Checkbox.each(function () {
                    var level3ItemLabel = $(this).find('label').contents().get(0).textContent.replace(/\s+/g, ' ').trim();
                    console.log(level3ItemLabel);
                    var matchFilterTitle = $('.searchFilterAppliedFilter .searchFilterCollapseItemTitle').filter(function () {
                        return $(this).attr('data-appliedfiltertitle').replace(/\s+/g, ' ').trim() == filterTitle.replace(/\s+/g, ' ').trim();
                    });
                    var matchSelectedFilterItem = $(matchFilterTitle[0]).next('.searchFilterCollapsibleContent').find('.searchFilterClearBlue').filter(function () {
                        return $(this).contents().get(0).textContent.replace(/\s+/g, ' ').trim() == level3ItemLabel.replace(/\s+/g, ' ').trim();
                    })
                    if (matchSelectedFilterItem.length > 0) {
                        $(matchSelectedFilterItem[0]).addClass('hide');
                    }
                    $(this).find('.checkboxTerms').prop('checked', false);
                })

                $(matchCheckBox[0]).next('.Level3CheckboxRow').slideUp();
                $(matchCheckBox[0]).find('.arrowdown').addClass('up');


                var level2Checkboxes = $(matchCheckBox[0]).closest('.Level2CheckboxRow').find('.CheckBox');
                //Now if all level 2 checkbox unchecked then we need to uncheck level 1
                // if (level2Checkboxes.find('.checkboxTerms:checked').length == 0) {
                //     $(matchCheckBox[0]).closest('.Level2CheckboxRow').prev('.CheckBox').find('.checkboxTerms').prop('checked', false);
                //     var level1CheckboxTitle = $(matchCheckBox[0]).closest('.Level2CheckboxRow').prev('.CheckBox').find('label').contents().get(0).textContent.replace(/\s+/g, ' ').trim();
                //     var matchSelectedFilterItem = currObj.closest('.searchFilterCollapsibleContent').find('.searchFilterClearBlue').filter(function () {
                //         return $(this).contents().get(0).textContent.replace(/\s+/g, ' ').trim() == level1CheckboxTitle.replace(/\s+/g, ' ').trim();
                //     })
                //     if (matchSelectedFilterItem.length > 0) {
                //         $(matchSelectedFilterItem[0]).addClass('hide');
                //     }
                //     $(matchCheckBox[0]).closest('.Level2CheckboxRow').slideUp();
                //     $(matchCheckBox[0]).closest('.Level2CheckboxRow').prev('.CheckBox').find('.arrowdown').addClass('up');
                // }
            }
            else if ($(matchCheckBox[0]).closest('.Level1CheckboxRow').length > 0 && $(matchCheckBox[0]).closest('.searchFilterItem').find('.Level2CheckboxRow').length > 0) {
                //Level 1 checkbox
                console.log('level 1 checkbox')
                //Remove all level checkboxes
                var allLevelCheckbox = $(matchCheckBox[0]).closest('.Level1CheckboxRow').find('.CheckBox:not(".lidisabled")');
                allLevelCheckbox.each(function () {
                    var allLevelItemLabel = $(this).find('label').contents().get(0).textContent.replace(/\s+/g, ' ').trim();
                    var matchFilterTitle = $('.searchFilterAppliedFilter .searchFilterCollapseItemTitle').filter(function () {
                        return $(this).attr('data-appliedfiltertitle').replace(/\s+/g, ' ').trim() == filterTitle.replace(/\s+/g, ' ').trim();
                    });
                    var matchSelectedFilterItem = $(matchFilterTitle[0]).next('.searchFilterCollapsibleContent').find('.searchFilterClearBlue').filter(function () {
                        return $(this).contents().get(0).textContent.replace(/\s+/g, ' ').trim() == allLevelItemLabel.replace(/\s+/g, ' ').trim();
                    });
                    if (matchSelectedFilterItem.length > 0) {
                        $(matchSelectedFilterItem[0]).addClass('hide');
                    }
                    $(this).find('.checkboxTerms').prop('checked', false);
                })

                $(matchCheckBox[0]).next('.Level2CheckboxRow').slideUp();
                $(matchCheckBox[0]).next('.Level2CheckboxRow').find('.Level3CheckboxRow').slideUp();
                $(matchCheckBox[0]).next('.Level2CheckboxRow').find('.arrowdown').addClass('up');
                $(matchCheckBox[0]).find('.arrowdown').addClass('up');
            }
        }

        if (currObj.closest('.searchFilterCollapsibleContent').find('.searchFilterClearBlue:visible').length <= 1) {
            currObj.closest('.searchFilterCollapsibleContent').prev('.searchFilterCollapseItemTitle').addClass('hide');
            // currObj.closest('.searchFilterCollapsibleContent').remove();
        }
        currObj.parent().addClass('hide');

        var totalAppliedFilters = $('.searchFilterWrapper .searchFilterBox .searchFilterAppliedFilter .searchFilterClearBlue:visible').length;
        $('.searchFilterWrapper .searchFilterBox .searchFilterBoxSubTitle').html(totalAppliedFilters + ' Filters Applied');
        if (totalAppliedFilters == 0) {
            $('.searchFilterAppliedFilter .searchFilterClearLight').hide();
        } else {
            $('.searchFilterAppliedFilter .searchFilterClearLight').show();
        }
    });
}

function clearAllSearchAppliedFilter(currObj) {
    $('.searchFilterWrapper .searchFilterBox .searchFilterAppliedFilter .searchFilterClearBlue').addClass('hide');
    $('.searchFilterWrapper .searchFilterBox .searchFilterAppliedFilter .searchFilterCollapseItemTitle').addClass('hide');
    $('.searchFilterItem .checkboxTerms').prop('checked', false);
    $('.searchFilterItem .radioTerms').prop('checked', false);
    $(".searchFilterWrapper .searchFilterBox .searchFilterDistance input[type='text'],.searchFilterWrapper .searchFilterBox .stateFilterTextBox").val("");

    var totalAppliedFilters = $('.searchFilterWrapper .searchFilterBox .searchFilterAppliedFilter .searchFilterClearBlue:visible').length;
    $('.searchFilterWrapper .searchFilterBox .searchFilterBoxSubTitle').html(totalAppliedFilters + ' Filters Applied');
    if (totalAppliedFilters == 0) {
        $('.searchFilterAppliedFilter .searchFilterClearLight').hide();
    } else {
        $('.searchFilterAppliedFilter .searchFilterClearLight').show();
    }
}

function setSearchFilterItemArrows() {
    $('.actualSearchFilters .Level3CheckboxRow,.actualSearchFilters .Level2CheckboxRow').each(function () {
        if ($(this).children().length > 0) {
            var arrowSpan = '<span class="arrowdown up"></span>';
            if ($(this).prev('.CheckBox').find('.arrowdown').length <= 0) {
            $(this).prev('.CheckBox').append(arrowSpan);
        }
        }
    })
}

function createSearchAppliedFilters() {
    $('.actualSearchFilters .searchFilterCollapseItemTitle').each(function () {
        var currentObj = $(this);
        var appliedFilterTitle = currentObj.attr('data-appliedfiltertitle');
        var appliedFilterTitleElement = '<a href="javascript:;" class="searchFilterCollapseItemTitle hide" data-appliedfiltertitle="' + appliedFilterTitle + '">' + appliedFilterTitle + '</a>';
        var appliedFilterContent = '<div class="searchFilterCollapsibleContent">';
        var closingAppliedFilterContent = '</div>';
        var connectedElements = appliedFilterTitleElement + appliedFilterContent;
        currentObj.next('.searchFilterCollapsibleContent').find('.searchFilterItem').not('.noResult').find('.CheckBox').each(function () {
            var appliedFilterContentItemLabel = $(this).find('label').contents().get(0).textContent.replace(/\s+/g, ' ').trim();
            var checkboxChecked = false;
            var radioChecked = false;
            var appliedFilterContentItem;

            if ($(this).find('.checkboxTerms').length > 0) {
                if ($(this).find('.checkboxTerms').prop('checked')) {
                    checkboxChecked = true;
                }
                else {
                    checkboxChecked = false;
                }
            }
            else if ($(this).find('.radioTerms').length > 0) {
                if ($(this).find('.radioTerms').prop('checked')) {
                    radioChecked = true;
                }
                else {
                    radioChecked = false;
                }
            }

            if ($(this).parent('.Level2CheckboxRow').length > 0) {
                if (checkboxChecked) {
                    appliedFilterContentItem = '<a href="javascript:;" class="searchFilterClearBlue level2">' + appliedFilterContentItemLabel + '<span class="searchClearAllIconBlue"></span></a>';
                }
                else {
                    appliedFilterContentItem = '<a href="javascript:;" class="searchFilterClearBlue hide level2">' + appliedFilterContentItemLabel + '<span class="searchClearAllIconBlue"></span></a>';
                }
            }
            else if ($(this).parent('.Level3CheckboxRow').length > 0) {
                if (checkboxChecked) {
                    appliedFilterContentItem = '<a href="javascript:;" class="searchFilterClearBlue level3">' + appliedFilterContentItemLabel + '<span class="searchClearAllIconBlue"></span></a>';
                }
                else {
                    appliedFilterContentItem = '<a href="javascript:;" class="searchFilterClearBlue hide level3">' + appliedFilterContentItemLabel + '<span class="searchClearAllIconBlue"></span></a>';
                }
            }
            else {
                if (checkboxChecked || radioChecked) {
                    appliedFilterContentItem = '<a href="javascript:;" class="searchFilterClearBlue">' + appliedFilterContentItemLabel + '<span class="searchClearAllIconBlue"></span></a>';
                }
                else {
                    appliedFilterContentItem = '<a href="javascript:;" class="searchFilterClearBlue hide">' + appliedFilterContentItemLabel + '<span class="searchClearAllIconBlue"></span></a>';
                }
            }
            connectedElements += appliedFilterContentItem;
        });
        connectedElements += closingAppliedFilterContent;
        $('.searchFilterAppliedFilter .appliedFilterContent').append(connectedElements);
    })

    $('.appliedFilterContent .searchFilterCollapsibleContent').each(function () {
        if ($(this).children('.searchFilterClearBlue:visible').length > 0) {
            $(this).prev('.searchFilterCollapseItemTitle').removeClass('hide');
        }
    })

    var totalAppliedFilters = $('.searchFilterWrapper .searchFilterBox .searchFilterAppliedFilter .searchFilterClearBlue:visible').length;
    $('.searchFilterWrapper .searchFilterBox .searchFilterBoxSubTitle').html(totalAppliedFilters + ' Filters Applied');
    if (totalAppliedFilters == 0) {
        $('.searchFilterAppliedFilter .searchFilterClearLight').hide();
    } else {
        $('.searchFilterAppliedFilter .searchFilterClearLight').show();
    }
}



function onClickAddRemoveSearchCompareProgram(currentObj) {
    var currentCourseTile = $(currentObj).closest('.courseDivTile')
    var compareProgramId = currentCourseTile.attr('data-compareprogramid');

    var compareProgamItems = $('.searchProgramCompareItems .searchProgramCompareItem').length;
    if ($(currentObj).closest('.bookmarkRow').hasClass('addedToCompareProgram')) {
        var matchedCompareProgram = $('.searchProgramCompareItems .searchProgramCompareItem').filter(function () {
            return $(this).attr('data-compareProgramId') == compareProgramId
        });
        if (matchedCompareProgram.length > 0) {
            $(matchedCompareProgram[0]).remove();
            $(currentObj).closest('.bookmarkRow').removeClass('addedToCompareProgram');
        }
    } else {
        if (compareProgamItems < 3) {
            var newCompareProgramTitle = currentCourseTile.find('.divTileContent').find('.universityName').text();
            var newCompareProgramDescription = currentCourseTile.find('.divTileContent').find('.universityDescription').text();
            var newCompareProgram = '<div class="searchProgramCompareItem" data-compareprogramid="' + compareProgramId + '"><a href="javascript:;" class="searchProgramCompareItemsCloseLink" onclick="removeSeachCompareProgram(null,this);"></a><div class="searchProgramCompareItemContent"><label class="title">' + newCompareProgramTitle + '</label><label class="description">' + newCompareProgramDescription + '</label></div></div>';
            $('.searchProgramCompareItems').append(newCompareProgram);
            $(currentObj).closest('.bookmarkRow').addClass('addedToCompareProgram');
        }
    }
    setDisabledSearchComparePrograms();
}

function setDisabledSearchComparePrograms() {
    var compareItemLength = $('.searchProgramCompareItems .searchProgramCompareItem').length;
    if (compareItemLength == 0) {
        $('.searchProgramCompareItems .noSearchCompareItem').show();
        $('.searchProgramCompareRowBox .clearCompareButton .clearAllButton').hide();
        $('.searchProgramCompareRowBox .clearCompareButton .compareButton').addClass('compareButtonDisable');
    } else {
        $('.searchProgramCompareRowBox .clearCompareButton .compareButton').removeClass('compareButtonDisable');
        $('.searchProgramCompareRowBox .clearCompareButton .clearAllButton').show();
        $('.searchProgramCompareItems .noSearchCompareItem').hide();
    }
}

function removeSeachCompareProgram(param, currentObj) {
    var filteredCompareProgram;
    if (param == 'clearAll') {
        filteredCompareProgram = $('.searchProgramCompareItems .searchProgramCompareItem');
    } else {
        filteredCompareProgram = $(currentObj).closest('.searchProgramCompareItem');
    }
    filteredCompareProgram.filter(function () {
        var compareProgramId = $(this).attr('data-compareprogramid');
        var tilesContainer;
        if (compareProgramId.split('-')[0] == 'bookmark') {
            tilesContainer = $('.searchCompareBookmarkedContainer .courseDivTile');
        } else {
            tilesContainer = $('.searchCompareRecommendedContainer .courseDivTile')
        }
        var matchTile = tilesContainer.filter(function () {
            return $(this).attr('data-compareprogramid') == compareProgramId
        });
        if (matchTile.length > 0) {
            $(matchTile[0]).find('.bookmarkRow').removeClass('addedToCompareProgram');
            $(this).remove();
            setDisabledSearchComparePrograms();
        }
    })
}

function adjustSearchFilterScrollBar() {
    if ($('.searchFilterBox').hasClass('expanded')) {
        $('.searchFilterBox').closest('.searchFilterWrapper').find('.coursesWrapper.searchWrapper').css('width', '73%');
    } else {
        $('.searchFilterBox').closest('.searchFilterWrapper').find('.coursesWrapper.searchWrapper').css('width', '100%');
    }
    if (winWidth > 1024) {
        var leftSideHeight = $('.searchFilterBox.expanded').outerHeight();
        var wrapper = $('.searchFilterBox.expanded').closest('.searchFilterWrapper');
        var rightSideHeight = wrapper.find('.coursesWrapper.searchWrapper .sortFilterBox').outerHeight() + wrapper.find('.coursesWrapper.searchWrapper .coursesContainer.expanded').height();
        if (rightSideHeight >= leftSideHeight) {
            $('.searchFilterBox.expanded').css('min-height', rightSideHeight);
            $('.searchFilterBox.expanded').css('max-height', rightSideHeight);
        } else {
            if (rightSideHeight < 700) {
                $('.searchFilterBox.expanded').css('min-height', 700);
                $('.searchFilterBox.expanded').css('max-height', 700);
            } else {
                $('.searchFilterBox.expanded').css('min-height', rightSideHeight);
                $('.searchFilterBox.expanded').css('max-height', rightSideHeight);
            }
        }
        if ($(".searchFilterBox").outerHeight() < 700) {
            $(".searchFilterBox").css("min-height", "700px");
            $(".searchFilterBox").css("max-height", "700px");
        }
    }

}

function onSearchAutoCompleteStateKeyUpEvent(currObj) {
    var stateFieldMincharlength = 0;
    var value = currObj.value.toUpperCase();
    if (value.length >= stateFieldMincharlength) {
        $(currObj).closest('.searchFilterCollapsibleContent').show();
        $(currObj).closest('.searchFilterCollapsibleContent').find('.searchFilterItem').hide().filter(function () {
            var textContentElement = $(this).find('.CheckBox:not(".lidisabled")').find('label').contents().get(0);
            if (textContentElement) {
                return $(this).find('.CheckBox:not(".lidisabled")').find('label').contents().get(0).textContent.replace(/\s+/g, ' ').trim().toUpperCase().startsWith(value);
            }
        }).show();

        var lengthVisibleItems = $(currObj).closest('.searchFilterCollapsibleContent').find('.searchFilterItem:visible').length;
        if (lengthVisibleItems == 0) {
            $(currObj).closest('.searchFilterCollapsibleContent').find('.searchFilterItem.noResult').show();
        } else {
            $(currObj).closest('.searchFilterCollapsibleContent').find('.searchFilterItem.noResult').hide();
        }
    } else {
        $(currObj).closest('.searchFilterCollapsibleContent').find('.searchFilterItem').hide();
        $(currObj).closest('.searchFilterCollapsibleContent').show().filter(function () {
            return !$(currObj).closest('.searchFilterCollapsibleContent').find('.searchFilterItem:visible').length;
        }).hide();
    }
}

function onClickToggleSearchFilterCollapseItemTitle() {
    $(document).on('click', '.searchFilterCollapseItemTitle', function (event) {
        var currentObj = event.target;
        $(currentObj).next('.searchFilterCollapsibleContent').slideToggle();
        $(currentObj).toggleClass('collapsed');
    });
}

function resetSortFilterValue() {
    if ($(".addFilterTitle .dvalue").length < 1) {
        return false;
    }
    var resetSortFilterValueVar = $(".listButtons ul li").filter(function () {
        return $(this).find("a").html().trim() == $(".addFilterTitle .dvalue").html().trim()
    });
    $(resetSortFilterValueVar[0]).addClass("added");

    var menuItemWidth = $('.coursesWrapper .sortFilterBox .appliedFilters .addFilter .listButtons').outerWidth();
    $('.coursesWrapper .sortFilterBox .appliedFilters .addFilter:nth-child(2)').css('min-width', menuItemWidth);
}

function onPageLoadSetSearchAppliedFiltersItems() {
    /*
        $('.actualSearchFilters .searchFilterItem .checkboxTerms').filter(function () {
            var currObj = $(this);
            var isChecked = currObj.prop('checked');
            var appliedFilterTitle;
            var attrDataId = (currObj.attr("data-id") == null || currObj.attr("data-id") == undefined) ? currObj.attr("id") : currObj.attr("data-id");
    
            if (currObj.closest('.searchFilterItem').closest('.searchFilterCollapsibleContent').prev().hasClass('stateFilterTextBox')) {
                appliedFilterTitle = currObj.closest('.searchFilterItem').closest('.searchFilterCollapsibleContent').prev().prev().attr('data-appliedfiltertitle');
            } else {
                appliedFilterTitle = currObj.closest('.searchFilterItem').closest('.searchFilterCollapsibleContent').prev().attr('data-appliedfiltertitle');
            }
            var appliedFilterLabelContent = currObj.closest('.CheckBox').find('label').contents().get(0).textContent.replace(/\s+/g, ' ').trim();
            var matchFilterTitle = $('.searchFilterAppliedFilter .searchFilterCollapseItemTitle').filter(function () {
                return $(this).attr('data-appliedfiltertitle').replace(/\s+/g, ' ').trim() == appliedFilterTitle.replace(/\s+/g, ' ').trim();
            });
            if (matchFilterTitle.length > 0 && isChecked) {
                var appendedFilterElement = '<a href="javascript:;" data-attr=' + attrDataId + ' class="searchFilterClearBlue">' + appliedFilterLabelContent + '<span class="searchClearAllIconBlue"></span></a>';
                var existItems = $(matchFilterTitle[0]).next('.searchFilterCollapsibleContent').find('a').filter(function () {
                    return $(this).contents(0).get(0).textContent.replace(/\s+/g, ' ').trim() == appliedFilterLabelContent
                })
                if (existItems.length <= 0) {
                    $(matchFilterTitle[0]).next('.searchFilterCollapsibleContent').append(appendedFilterElement);
                }
            } else if (matchFilterTitle.length > 0 && !isChecked) {
                $(matchFilterTitle[0]).next('.searchFilterCollapsibleContent').find('.searchFilterClearBlue').filter(function () {
                    return $(this).contents().get(0).textContent.replace(/\s+/g, ' ').trim() == appliedFilterLabelContent.replace(/\s+/g, ' ').trim()
                }).remove();
                if ($(matchFilterTitle[0]).next('.searchFilterCollapsibleContent').find('.searchFilterClearBlue').length == 0) {
                    $(matchFilterTitle[0]).next('.searchFilterCollapsibleContent').remove();
                    $(matchFilterTitle[0]).remove();
                }
            } else if (matchFilterTitle.length <= 0 && isChecked) {
                var newFilterTitle = '<a href="javascript:;" class="searchFilterCollapseItemTitle" data-appliedfiltertitle="' + appliedFilterTitle + '">' + appliedFilterTitle + '</a><div class="searchFilterCollapsibleContent">'
                newFilterTitle += '<a href="javascript:;" data-attr=' + attrDataId + ' class="searchFilterClearBlue">' + appliedFilterLabelContent + '<span class="searchClearAllIconBlue"></span></a></div>';
                insertAtIndex(newFilterTitle, appliedFilterTitle);
            }
            var totalAppliedFilters = $('.searchFilterWrapper .searchFilterBox .searchFilterAppliedFilter .searchFilterClearBlue').length;
            $('.searchFilterWrapper .searchFilterBox .searchFilterBoxSubTitle').html(totalAppliedFilters + ' Filters Applied');
            if (totalAppliedFilters == 0) {
                $('.searchFilterAppliedFilter .searchFilterClearLight').hide();
            } else {
                $('.searchFilterAppliedFilter .searchFilterClearLight').show();
            }
        });
    
    
        $('.actualSearchFilters .searchFilterItem .radioTerms').filter(function () {
            var currObj = $(this);
            var isChecked = currObj.prop('checked');
            var appliedFilterTitle;
            var attrDataId = (currObj.attr("data-id") == null || currObj.attr("data-id") == undefined) ? currObj.attr("id") : currObj.attr("data-id");
    
            if (currObj.closest('.searchFilterItem').closest('.searchFilterCollapsibleContent').prev().hasClass('stateFilterTextBox')) {
                appliedFilterTitle = currObj.closest('.searchFilterItem').closest('.searchFilterCollapsibleContent').prev().prev().attr('data-appliedfiltertitle');
            } else {
                appliedFilterTitle = currObj.closest('.searchFilterItem').closest('.searchFilterCollapsibleContent').prev().attr('data-appliedfiltertitle');
            }
            var appliedFilterLabelContent = currObj.closest('.CheckBox').find('label').contents().get(0).textContent.replace(/\s+/g, ' ').trim();
            var matchFilterTitle = $('.searchFilterAppliedFilter .searchFilterCollapseItemTitle').filter(function () {
                return $(this).attr('data-appliedfiltertitle').replace(/\s+/g, ' ').trim() == appliedFilterTitle.replace(/\s+/g, ' ').trim();
            });
            if (matchFilterTitle.length > 0 && isChecked) {
                $(matchFilterTitle[0]).next('.searchFilterCollapsibleContent').empty();
                var appendedFilterElement = '<a href="javascript:;" data-attr=' + attrDataId + ' class="searchFilterClearBlue">' + appliedFilterLabelContent + '<span class="searchClearAllIconBlue"></span></a>';
    
                var existItems = $(matchFilterTitle[0]).next('.searchFilterCollapsibleContent').find('a').filter(function () {
                    return $(this).contents(0).get(0).textContent.replace(/\s+/g, ' ').trim() == appliedFilterLabelContent
                })
                if (existItems.length <= 0) {
                    $(matchFilterTitle[0]).next('.searchFilterCollapsibleContent').append(appendedFilterElement);
                }
            } else if (matchFilterTitle.length > 0 && !isChecked) {
                $(matchFilterTitle[0]).next('.searchFilterCollapsibleContent').empty();
                $(matchFilterTitle[0]).next('.searchFilterCollapsibleContent').find('.searchFilterClearBlue').filter(function () {
                    return $(this).contents().get(0).textContent.replace(/\s+/g, ' ').trim() == appliedFilterLabelContent.replace(/\s+/g, ' ').trim()
                }).remove();
                if ($(matchFilterTitle[0]).next('.searchFilterCollapsibleContent').find('.searchFilterClearBlue').length == 0) {
                    $(matchFilterTitle[0]).next('.searchFilterCollapsibleContent').remove();
                    $(matchFilterTitle[0]).remove();
                }
            } else if (matchFilterTitle.length <= 0 && isChecked) {
                var newFilterTitle = '<a href="javascript:;" class="searchFilterCollapseItemTitle" data-appliedfiltertitle="' + appliedFilterTitle + '">' + appliedFilterTitle + '</a>';
                newFilterTitle += '<div class="searchFilterCollapsibleContent"><a href="javascript:;" data-attr="' + attrDataId + '" class="searchFilterClearBlue">' + appliedFilterLabelContent + '<span class="searchClearAllIconBlue"></span></a></div>';
                setTimeout(() => {
                    insertAtIndex(newFilterTitle, appliedFilterTitle);
                    var totalAppliedFilters = $('.searchFilterWrapper .searchFilterBox .searchFilterAppliedFilter .searchFilterClearBlue').length;
                    $('.searchFilterWrapper .searchFilterBox .searchFilterBoxSubTitle').html(totalAppliedFilters + ' Filters Applied');
                    if (totalAppliedFilters == 0) {
                        $('.searchFilterAppliedFilter .searchFilterClearLight').hide();
                    } else {
                        $('.searchFilterAppliedFilter .searchFilterClearLight').show();
                    }
                }, 1);
            }
          
        });
    */
}

function insertAtIndex(element, filterTitle) {
    var appliedFilterTitle = [];
    var actualFilterTitle = [];
    var calculatedIndex = 0;
    var index = 0;
    var newTrimmedArray = [];
    flagDirection = "";
    $('.actualSearchFilters .searchFilterCollapseItemTitle').filter(function () {
        actualFilterTitle.push($(this).attr('data-appliedfiltertitle'));
        appliedFilterTitle.push("");
    })
    index = actualFilterTitle.indexOf(filterTitle);
    $('.searchFilterAppliedFilter .searchFilterCollapseItemTitle').each(function () {
        var appliedItem = $(this).attr('data-appliedfiltertitle');
        appliedFilterTitle[actualFilterTitle.indexOf(appliedItem)] = appliedItem;
    })
    if ($('.searchFilterAppliedFilter .searchFilterCollapseItemTitle').length == 0) {
        calculatedIndex = 0;
    } else {
        if (index > 0) {
            for (var i = index; i > 0; i--) {
                newTrimmedArray = appliedFilterTitle.filter(function (v) {
                    return v != '';
                })
                var tempIndex = newTrimmedArray.indexOf(actualFilterTitle[i - 1]);
                if (tempIndex != -1) {
                    calculatedIndex = tempIndex;
                    flagDirection = "after";
                    break;
                } else {
                    calculatedIndex = 0;
                    flagDirection = "start";
                }
            }
        } else {
            calculatedIndex = 0;
        }
    }
    appliedFilterTitle[index] = filterTitle;
    newTrimmedArray = appliedFilterTitle.filter(function (v) {
        return v != '';
    })

    if (calculatedIndex == 0 && $('.searchFilterAppliedFilter .searchFilterCollapseItemTitle').length == 0) {
        $('.searchFilterAppliedFilter .searchFilterClearLight').before(element);
    } else {
        if (calculatedIndex == 0 && index == 0) {
            $('.searchFilterAppliedFilter .searchFilterCollapseItemTitle').eq(calculatedIndex).before(element);
        } else {
            if (calculatedIndex == 0 && flagDirection != "after") {
                $('.searchFilterAppliedFilter .searchFilterCollapseItemTitle').eq(calculatedIndex).before(element);
            } else if (calculatedIndex == 0 && flagDirection == "start") {
                $('.searchFilterAppliedFilter .searchFilterCollapseItemTitle').eq(calculatedIndex).before(element);
            } else if (flagDirection == "after") {
                $('.searchFilterAppliedFilter .searchFilterCollapseItemTitle').eq(calculatedIndex).next().after(element);
            }
        }
    }
    var totalAppliedFilters = $('.searchFilterWrapper .searchFilterBox .searchFilterAppliedFilter .searchFilterClearBlue:visible').length;
    $('.searchFilterWrapper .searchFilterBox .searchFilterBoxSubTitle').html(totalAppliedFilters + ' Filters Applied');
    if (totalAppliedFilters == 0) {
        $('.searchFilterAppliedFilter .searchFilterClearLight').hide();
    } else {
        $('.searchFilterAppliedFilter .searchFilterClearLight').show();
    }
}

function activateTuitionManagementTab(tabId) {
    var activeTabIndex = tabId.split('tuitionManagementTabContent')[1] - 1;
    currentObj = $('ul.tuitionManagementTab li').eq(activeTabIndex);
    $('ul.tuitionManagementTab li.active').removeClass('active');
    $(currentObj).addClass('active');
    $('.tuitionManagementTabs .tuitionManagementTabContent.active').removeClass('active');
    $('.tuitionManagementTabs #' + tabId + '.tuitionManagementTabContent').addClass('active');
    $('.tuitionReimbursementSucessSection').hide();
    $('.tuitionReimbursementSection').show();
    $('.tuitionManagementTabs .mobileViewTuitionManagementTabLink').html($(currentObj).find('a').text());
    $(".tuitionManagementTabs ul.tuitionManagementTab").removeAttr("style");
    if (tabId == "tuitionManagementTabContent1") {
        $("ul.subMenuItem li.sublink").removeClass("active");
        $("ul.subMenuItem li.sublink.Overview").addClass("active");
    } else if (tabId == "tuitionManagementTabContent3") {
        $("ul.subMenuItem li.sublink").removeClass("active");
        $("ul.subMenuItem li.sublink.tuitionPolicy").addClass("active");
    }
}

function goToTuitionReimbursementStep(currentObj) {
    if ($(currentObj).closest('li').hasClass("tmiSectionDisabled")) {
        return false;
    }
    $('.tuitionReimbursementLevel li.active').removeClass('active');
    $('.tuitionReimbursementStepContent.active').removeClass('active');
    $(currentObj).closest('li').find('.tuitionReimbursementStepContent').addClass('active');
    $(currentObj).closest('li').addClass('active');
    $("html, body").animate({
        scrollTop: ($(".tuitionReimbursementStepContent.active").offset().top - 150)
    });
}

function goToNextTuitionReimbursementStep(currentObj) {
    if (checkReqMissingTMI() == false) {
        return false;
    }

    $(currentObj).closest('li').addClass('completed');
    if ($(currentObj).closest('li').next('li').hasClass("tmiSectionDisabled")) {
        $(currentObj).closest('li').next('li').removeClass("tmiSectionDisabled");
    }
    if ($(currentObj).closest('li').next().length == 0) {
        $(currentObj).closest('.tuitionReimbursementSection').hide();
        $('.tuitionReimbursementSucessSection').show();
        $("html, body").animate({
            scrollTop: ($(".tuitionReimbursementSucessSection").offset().top - 150)
        });
        return false;
    } else {
        $(currentObj).closest('li').next().addClass('active');
        $(currentObj).closest('li').removeClass("active");
        $(currentObj).closest('li').next().find('.tuitionReimbursementStepContent').addClass('active');
        $(currentObj).closest('li').find(".tuitionReimbursementStepContent").removeClass("active");
        $('.tuitionReimbursementSucessSection').hide();
        $(currentObj).closest('.tuitionReimbursementSection').show();
    }
    $("html, body").animate({
        scrollTop: ($(".tuitionReimbursementStepContent.active").offset().top - 150)
    });
}

function scrollToErrorField() {
    $("html, body").animate({
        scrollTop: ($(".tuitionReimbursementStepContent.active .tuitionReimbursementFormRow.requiredField .errorField").offset().top - 50)
    });

    $(".tuitionReimbursementStepContent.active .tuitionReimbursementFormRow.requiredField .errorField").focus();
}

function checkReqMissingTMI() {
    var currentSection = $(".tuitionReimbursementLevel li.active");
    var listRows = $(currentSection).find(".tuitionReimbursementFormRow.requiredField").find(".errorField");
    if (currentSection.find(".tuitionReimbursementLabel").html().search("Documents") > 0) {
        return true;
    }
    if (listRows.length > 0) {
        $("html, body").animate({
            scrollTop: ($(".tuitionReimbursementStepContent.active .tuitionReimbursementFormRow.requiredField").offset().top - 50)
        });
        return false;
    }
}

function onClickTuitionManagementTabsDropdown() {
    $('.tuitionManagementTabs ul.tuitionManagementTab').slideToggle();
    if ($(".tuitionManagementTabs ul.tuitionManagementTab").is(":visible")) {
        $(".tuitionManagementTabs ul.tuitionManagementTab").css("display", "flex");
    }
}


function removeFavoriteCompareProgram(param, currentObj) {
    var filteredCompareProgram;
    if (param == 'clearAll') {
        filteredCompareProgram = $('.favoriteProgramCompareItems .favoriteProgramCompareItem');
    }
    else {
        filteredCompareProgram = $(currentObj).closest('.favoriteProgramCompareItem');
    }
    filteredCompareProgram.filter(function () {
        var compareProgramId = $(this).attr('data-compareprogramid');
        var tilesContainer = $('.favoriteCompareBookmarkedContainer .courseDivTile');
        var matchTile = tilesContainer.filter(function () {
            return $(this).attr('data-compareprogramid') == compareProgramId
        })
        if (matchTile.length > 0) {
            $(matchTile[0]).find('.bookmarkRow').removeClass('addedToCompareProgram');
            $(this).remove();
            setDisabledFavoriteComparePrograms();
        }
    })
}

function onClickAddRemoveFavoriteCompareProgram(currentObj) {
    var currentCourseTile = $(currentObj).closest('.courseDivTile');
    var compareProgramId = currentCourseTile.attr('data-compareprogramid');

    var compareProgamItems = $('.favoriteProgramCompareItems .favoriteProgramCompareItem').length;
    if ($(currentObj).closest('.bookmarkRow').hasClass('addedToCompareProgram')) {
        var matchedCompareProgram = $('.favoriteProgramCompareItems .favoriteProgramCompareItem').filter(function () {
            return $(this).attr('data-compareProgramId') == compareProgramId
        })
        if (matchedCompareProgram.length > 0) {
            $(matchedCompareProgram[0]).remove();
            $(currentObj).closest('.bookmarkRow').removeClass('addedToCompareProgram');
        }
    }
    else {
        if (compareProgamItems < 3) {
            var newCompareProgramTitle = currentCourseTile.find('.divTileContent').find('.universityName').text();
            var newCompareProgramDescription = currentCourseTile.find('.divTileContent').find('.universityDescription').text();
            var newCompareProgram = '<div class="favoriteProgramCompareItem" data-compareprogramid="' + compareProgramId + '"><a href="javascript:;" class="favoriteProgramCompareItemsImageBox" onclick="removeFavoriteCompareProgram(null,this);"></a><div class="favoriteProgramCompareItemContent"><label class="title">' + newCompareProgramTitle + '</label><label class="description">' + newCompareProgramDescription + '</label></div></div>';
            $('.favoriteProgramCompareItems').append(newCompareProgram);
            $(currentObj).closest('.bookmarkRow').addClass('addedToCompareProgram');
        }
    }
    setDisabledFavoriteComparePrograms();
}

function setDisabledFavoriteComparePrograms() {
    var compareItemLength = $('.favoriteProgramCompareItems .favoriteProgramCompareItem').length;
    if (compareItemLength == 0) {
        $('.favoriteProgramCompareItems .noSearchCompareItem').show();
        $('.favoriteProgramCompareRowBox .clearCompareButton .clearAllButton').hide();
        $('.favoriteProgramCompareRowBox .clearCompareButton .compareButton').addClass('compareButtonDisable');
    }
    else {
        $('.favoriteProgramCompareRowBox .clearCompareButton .compareButton').removeClass('compareButtonDisable');
        $('.favoriteProgramCompareRowBox .clearCompareButton .clearAllButton').show();
        $('.favoriteProgramCompareItems .noSearchCompareItem').hide();
    }
}

function closemodalWrapperProgramDetail() {
    $('.modalWrapper').hide();
    $('body').removeAttr('style');
}

function loadPopupProgramDetail() {
    $(".modalWrapper").show();
    $('body').css('overflow', 'hidden');
}

function onClickTuitionManagementPickListItem() {
    $('.tuitionReimbursementForm .dropdown-item').on('click', function () {
        var currentObj = $(this);
        currentObj.closest('.dropdown-menu').find('.dropdown-item').removeClass('added');
        currentObj.closest('.dropdownButtonBox').find('.dropdownButton').html(currentObj.text() + '<span class="dropdownButtonArrowDown"></span>')
        currentObj.addClass('added');
        closeDropDownButtonTuitionReimbursement();
        currentObj.closest('.dropdown-menu').removeClass("show");
    });
}

function closeDropDownButtonTuitionReimbursement() {
    $(document).on('click', function (event) {
        var $trigger = $('.tuitionReimbursementForm .dropdownButtonBox');
        if ($trigger !== event.target && !$trigger.has(event.target).length) {
            $(".tuitionReimbursementForm .dropdown-menu.show").removeClass("show");
        } else {
            $(".tuitionReimbursementForm .dropdown-menu.show").removeClass("show");
            if ($(event.target).hasClass('added')) {
                $(event.target).closest('.dropdownButtonBox').find('.dropdown-menu').removeClass('show');
            } else {
                $(event.target).closest('.dropdownButtonBox').find('.dropdown-menu').addClass('show');
            }
        }
    });
}

function FlipTuitionReimbursementCardOnClick() {
    $('.addedCourseSection .addedCourseItem .addedCourseBody').unbind().on('click', function (elm) {
        var editFlipButton = $(elm.target).closest('.addedCourseItem').attr('class');
        if (editFlipButton != 'editFlipButton') {
            $(elm.target).closest('.addedCourseItem').toggleClass('isFlipped');
        } else {
            $('.addedCourseItem.isEditFlipped').removeClass('isEditFlipped');
            $(elm.target).closest('.addedCourseItem').addClass('isEditFlipped');
        }
    });
}

function onChangeMyProfileFile() {
    $('input.fileUpload[type="file"]').change(function (e) {
        var fileName = e.target.files[0].name;
        $('.noFileChosenLabel').hide();
        $('.chosenFileSection').show();
        $('#myProfileFileName').html(fileName);
    });
}

function toggleUpdateMyProfileModal(param) {
    if (param == 'close') {
        $('.updateMyProfileModal').hide();
    } else if (param == 'open') {
        $('.updateMyProfileModal').show();
    }
}

function onAutoCompleteMyProfileKeyUpEvent(obj) {
    var mincharlength = 0;
    var value = obj.value.toUpperCase();
    if (value.length >= mincharlength) {
        $(obj).closest('.autoSuggestPickList').find('.dropdown-menu').find('.dropdown-item').hide().filter(function () {
            return $(this).text().replace(/\s+/g, ' ').trim().toUpperCase().startsWith(value);
        }).show();

        var lengthVisibleItems = $(obj).closest('.autoSuggestPickList').find('.dropdown-menu').find(".dropdown-item:visible").length;
        if (lengthVisibleItems == 0) {
            $(obj).closest('.autoSuggestPickList').find('.dropdown-menu').find('.dropdown-item.noResult').show();
        }
        else {
            $(obj).closest('.autoSuggestPickList').find('.dropdown-menu').find('.dropdown-item.noResult').hide();
        }
    }
    else {
        $(obj).closest('.autoSuggestPickList').find('.dropdown-menu').find('.dropdown-item').hide();
        $(obj).closest('.autoSuggestPickList').find('.dropdown-menu').show().filter(function () {
            return !$(this).find(".dropdown-item:visible").length;
        }).hide();
    }
}

function activateAutoCompleteItem() {
    $('.autoSuggestPickList .dropdown-item:not(.noResult)').on('click', function (event) {
        var currentObj = $(this);
        currentObj.closest('.autoSuggestPickList').find('.dropdown-menu').find('.dropdown-item').removeClass('added');
        currentObj.addClass('added');
        currentObj.closest('.autoSuggestPickList').find('.autoSuggestPickListSection').find('.dropdownButton').val(currentObj.text().replace(/\s+/g, ' ').trim());
        currentObj.closest('.dropdown-menu').removeClass("show");
        if (currentObj.closest(".dropdownButtonBox").find(".dropdownButton").hasClass("dropdownButtonCountry")) {
            setStateTextProfilePage();
        }
    });
}

function removeDisableSections(valueTillNotDisable) {
    var curObj = $(".tuitionReimbursementLevel > li");
    curObj.each(function (index) {
        if (valueTillNotDisable == -1) {
            $(curObj).removeClass("tmiSectionDisabled");
        }
        if (index <= (valueTillNotDisable - 1)) {
            $(this).addClass("completed");
            $(this).removeClass("active");
            $(this).removeClass("tmiSectionDisabled");
            $(this).find(".tuitionReimbursementStepContent").removeClass("active");
        } else {
            $(this).find(".tuitionReimbursementStepContent").addClass("active");
            $(this).addClass("active");
            $(this).removeClass("tmiSectionDisabled");
            return false;
        }
    });
}

function onChangeTuitionManagementDocument() {
    $(".customTuitionReimbursementFileUploadBox").find('input[type="file"]').change(function (e) {
        var currentObj = e.target;
        var fileName;
        if (e.target.files[0]) {
            fileName = e.target.files[0].name;
        }
        $(currentObj).closest('.customTuitionReimbursementFileUploadBox').find('.tuitionManagementNoFileChosenLabel').hide();
        $(currentObj).closest('.customTuitionReimbursementFileUploadBox').find('.tuitionManagementChosenFileSection').show();
        $(currentObj).closest('.customTuitionReimbursementFileUploadBox').find('.tuitionManagementFileName').html(fileName);
    })
}

function hideViewAnswersModalOverflow() {
    if ($('.viewAnswersModal').css('display') == 'block') {
        $('body').css('overflow', 'hidden');
    } else {
        $('body').removeAttr('style');
    }
}

function toggleViewAnswersModal(param) {
    if (param == 'open') {
        $('.viewAnswersModal').css('display', 'block');
        $('body').css('overflow', 'hidden');
    }
    else if (param == 'close') {
        $('.viewAnswersModal').hide();
        $('body').removeAttr('style');
    }
}

function onClickEpbInterestedProgram() {
    $('.epbInterestedProgram .epbInterestedProgramIcon,.epbInterestedProgram .epbInterestedProgramTitle').on('click', function () {
        var currObj = $(this);
        currObj.closest('.epbInterestedProgram').toggleClass('selected');
    })
}

function toggleEpbViewAnswersItem() {
    $('.viewAnswersStep .viewAnswersStepLabel').on('click', function () {
        var currObj = $(this);
        currObj.closest('li').toggleClass('active');
    })
}

function onClickAddRemoveSearchCompareProgram(currentObj) {
    // update this function into script.js
    var currentCourseTile = $(currentObj).closest('.courseDivTile')
    var compareProgramId = currentCourseTile.attr('data-compareProgramId');

    var compareProgamItems = $('.searchProgramCompareItems .searchProgramCompareItem').length;
    if ($(currentObj).closest('.bookmarkRow').hasClass('addedToCompareProgram')) {
        var matchedCompareProgram = $('.searchProgramCompareItems .searchProgramCompareItem').filter(function () {
            return $(this).attr('data-compareProgramId') == compareProgramId
        });
        if (matchedCompareProgram.length > 0) {
            $(matchedCompareProgram[0]).remove();
            $(currentObj).closest('.bookmarkRow').removeClass('addedToCompareProgram');
        }
    } else {
        if (compareProgamItems < 3) {
            var newCompareProgramTitle = currentCourseTile.find('.divTileContent').find('.universityName').text();
            var newCompareProgramDescription = currentCourseTile.find('.divTileContent').find('.universityDescription').text();
            var newCompareProgram = '<div class="searchProgramCompareItem" data-compareProgramId="' + compareProgramId + '"><a href="javascript:;" class="searchProgramCompareItemsCloseLink" onclick="removeSeachCompareProgram(null,this);"></a><div class="searchProgramCompareItemContent"><label class="title">' + newCompareProgramTitle + '</label><label class="description">' + newCompareProgramDescription + '</label></div></div>';
            $('.searchProgramCompareItems').append(newCompareProgram);
            $(currentObj).closest('.bookmarkRow').addClass('addedToCompareProgram');
        }
    }
    setDisabledSearchComparePrograms();
}

function onClickOutOfNetworkPickListItem() {
    $('.addOutofNetworkProgramForm .dropdown-item').on('click', function () {
        var currentObj = $(this);
        currentObj.closest('.dropdown-menu').find('.dropdown-item').removeClass('added');
        currentObj.closest('.dropdownButtonBox').find('.dropdownButton').html(currentObj.text() + '<span class="dropdownButtonArrowDown"></span>')
        currentObj.addClass('added');
        closeDropDownOutOfNetwork();
    });
}

function closeDropDownOutOfNetwork() {
    $(document).on('click', function (event) {
        var $trigger = $('.addOutofNetworkProgramForm .dropdownButtonBox');
        if ($trigger !== event.target && !$trigger.has(event.target).length) {
            $(".addOutofNetworkProgramForm .dropdown-menu.show").removeClass("show");
        } else {
            $(".addOutofNetworkProgramForm .dropdown-menu.show").removeClass("show");
            if ($(event.target).attr('class') == 'dropdown-item added') {
                $(event.target).closest('.dropdownButtonBox').find('.dropdown-menu').removeClass('show');
            } else {
                $(event.target).closest('.dropdownButtonBox').find('.dropdown-menu').addClass('show');
            }
        }
    });
}

function toggleAddOutOfNetworkProgramModal(param) {
    if (param == 'close') {
        $('.addOutofNetworkProgramModal').hide();
        $('body').removeAttr('style');
    }
    else if (param == 'open') {
        $('.addOutofNetworkProgramModal').css('display', 'block');
        $('body').css('overflow', 'hidden');
    }
}

function savingsReportTableToggleColumnIndex(index) {
    $('.savingsReportPersonalizedTable').find('tbody').children('tr').each(function () {
        $(this).children("td").hide();
        $(this).children("td").eq(index).show();
        $(this).children("td").eq(index + 1).show();
    });

    $('.savingsReportPersonalizedTable').find('thead').children("tr").each(function () {
        $(this).children("th").hide();
        $(this).children("th").eq(0).show();
        $(this).children("th").eq(index + 1).show();
        $(this).children("th").eq(index + 2).show();
    });

    $('.savingsReportApplyBox tbody').children("tr").each(function () {
        $(this).children("td").hide();
        $(this).children("td").eq(0).show();
        $(this).children("td").eq(index + 1).show();
        $(this).children("td").eq(index + 2).show();
    });

    var col = $('.savingsReportPersonalizedTable,.savingsReportApplyBox').find('colgroup').find('col');
    col.hide();
    col.eq(0).show();
    col.eq(index + 1).show();
    col.eq(index + 2).show();
}

function savingsReportTableToggleColumn() {
    if (winWidth < 430) {
        savingsReportTableToggleColumnIndex(0);
    }
    else {
        $(".savingsReportPersonalizedTable colgroup col,.savingsReportApplyBox colgroup col").show();
        $(".savingsReportPersonalizedTable thead,.savingsReportPersonalizedTable tbody").children("tr").each(function () {
            $(this).children("th,td").each(function (count) {
                $(this).show();
            });
        });
        $(".savingsReportApplyBox tbody tr").find('td').show();
    }
}

function onClickSavingsReportHeaderNextPrevArrow(param) {
    var currentCarousel = $('.savingsReportCarousel').find('.savingsReportCarouselItem.active');
    var totalTD = $('.savingsReportPersonalizedTable').find('thead tr th').length;
    if (param == 'next') {
        var currentCarouselActiveIndex = currentCarousel.last().index() - 1;
        if (currentCarouselActiveIndex < 2 && currentCarouselActiveIndex > 0 && totalTD > 3) {
            savingsReportTableToggleColumnIndex(currentCarouselActiveIndex);
            $('.savingsReportCarousel').find('.savingsReportCarouselItem.active').removeClass('active');
            $('.savingsReportCarousel').each(function () {
                $(this).find('.savingsReportCarouselItem').eq(currentCarouselActiveIndex + 1).addClass('active');
                $(this).find('.savingsReportCarouselItem').eq(currentCarouselActiveIndex + 2).addClass('active');
            })
            // $('.savingsReportCarousel').find('.savingsReportCarouselItem').eq(currentCarouselActiveIndex + 1).addClass('active');
            // $('.savingsReportCarousel').find('.savingsReportCarouselItem').eq(currentCarouselActiveIndex + 2).addClass('active');
        }
    }
    else if (param == 'prev') {
        var currentCarouselActiveIndex = currentCarousel.first().index() - 1;
        if (currentCarouselActiveIndex > 0 && totalTD > 3) {
            savingsReportTableToggleColumnIndex(currentCarouselActiveIndex - 1);
            $('.savingsReportCarousel').find('.savingsReportCarouselItem.active').removeClass('active');
            $('.savingsReportCarousel').each(function () {
                $(this).find('.savingsReportCarouselItem').eq(currentCarouselActiveIndex + 1).addClass('active');
                $(this).find('.savingsReportCarouselItem').eq(currentCarouselActiveIndex).addClass('active');
            })
            // $('.savingsReportCarousel').find('.savingsReportCarouselItem').eq(currentCarouselActiveIndex + 1).addClass('active');
            // $('.savingsReportCarousel').find('.savingsReportCarouselItem').eq(currentCarouselActiveIndex).addClass('active');
        }
    }
}

function onClickDownloadSavingsReport() {
    window.print();
    return false;
}

function setsavingsReportApplySectionOnScrollDC() {
    $(window).scroll(function (e) {
        var outerDivHeight = $('.savingsReportBox').outerHeight(true) + $('.breadcrumb').outerHeight(true) + $('.menubarBox').outerHeight(true);
        if (($(window).scrollTop() + $(window).height()) < outerDivHeight) {
            $('.savingsReportApplySection').css({
                position: 'fixed',
                bottom: 0,
                marginBottom: 0
            });
        } else {
            $('.savingsReportApplySection').css({
                position: 'static',
                marginBottom: 120
            })
        }
    });
}

function toggleQuickView(currentObj) {
    $(currentObj).closest('.tableCol.buttons').find('.closeButton').toggleClass('show');
    $(currentObj).closest('.tableCol.buttons').find('.quickView').toggleClass('hide');
    $(currentObj).closest('.tableRow').find('.childTableRow').toggleClass('show');
}

function initProgramDetailsCarousel(currentProgramDetailSlideParam) {
    var imageWidth = $('.carouselContainer').outerWidth();
    var slideContainer = $('.programDetailsWrapperBox .programDetailsCarouselTiles');
    var slides = $('.programDetailsWrapperBox .programDetailsCarouselTile');
    var programDetailsCarousel = $(".programDetailsCarousel");
    slideContainer.css("width", (slides.length * imageWidth) + "px");
    if ($('.programDetailsWrapperBox').length > 0) {
        if ($('.programDetailsWrapperBox .programDetailsCarouselTile').length > 1) {
            currentProgramDetailSlide = currentProgramDetailSlideParam;
            $(slides).each(function (index) {
                $(this).css("left", (imageWidth * index));
            });
            startSlider();
        } else {
            $('.programDetailsCarousel').hide();
            $('.programDetailsCarouselNextArrow').hide();
            $('.programDetailsCarouselPrevArrow').hide();
        }
    }
}

function startSlider(currentObj, param) {
    $('.programDetailsCarouselPrevArrow, .programDetailsCarouselNextArrow').hide();
    if (param == 'next') {
        currentProgramDetailSlide = currentProgramDetailSlide + 1;
    } else if (param == 'prev') {
        currentProgramDetailSlide = currentProgramDetailSlide - 1;
    }
    else if (param == 'indicator') {
        currentProgramDetailSlide = $(currentObj).attr('data-target').split('-')[1] - 1;
    }

    var slideContainer = $('.programDetailsCarouselTiles');
    var slides = slideContainer.find('.programDetailsCarouselTile');
    var tileWidth = $('.programDetailsCarouselTile').outerWidth();
    var carouselItem = $('.programDetailsCarouselItem');
    var totalSlideWidth = tileWidth * slides.length;
    var animationSpeed = 1000;
    var marginLeft = (tileWidth * currentProgramDetailSlide) * -1;
    carouselItem.removeClass('active');
    carouselItem.eq(currentProgramDetailSlide).addClass('active');

    if (currentProgramDetailSlide == 0) {
        $('.programDetailsCarouselPrevArrow').hide();
    } else {
        $('.programDetailsCarouselPrevArrow').show();
    }

    if (currentProgramDetailSlide == slides.length - 1) {
        $('.programDetailsCarouselNextArrow').hide();
    } else {
        $('.programDetailsCarouselNextArrow').show();
    }
    $(slideContainer).animate({
        "left": marginLeft,
    }, animationSpeed);
}

function showProgramDetailAboutUniversity() {
    if (winWidth > 1024) {
        $('.programDetailsWrapperBox .aboutUniversityRightSide').show();
    }
    else {
        $('.programDetailsWrapperBox .aboutUniversityRightSide').hide();
    }
}

function viewProgramDetailUniversityDetail(param) {
    if (param == 'open') {
        $('.programDetailsWrapperBox .aboutUniversityRightSide').show();
    }
    else if (param == 'close') {
        $('.programDetailsWrapperBox .aboutUniversityRightSide').hide();
    }
}

function openCloseApplyNowConfirmationModal(param) {
    if (param == 'open') {
        $('.modalWrapper').css('display', 'block');
        $('body').css('overflow', 'hidden');
    }
    else if (param == 'close') {
        $('.modalWrapper').hide();
        $('body').removeAttr('style');
    }
}

function onClickAddRemoveOtherProgram(currentObj) {
    var currentCourseTile = $(currentObj).closest('.courseDivTile')
    if ($(currentObj).closest('.bookmarkRow').hasClass('addedToCompareProgram')) {
        $(currentObj).closest('.bookmarkRow').removeClass('addedToCompareProgram');
    }
    else {
        $(currentObj).closest('.bookmarkRow').addClass('addedToCompareProgram');
    }
}

function onclickFAQExpandCollapse(currentObj) {
    $(currentObj).closest('.faqQuestionRow').find('.faqQuestionBody').slideToggle('slow');
    if ($(currentObj).hasClass('expand')) {
        $(currentObj).removeClass('expand');
        $(currentObj).addClass('collapse');
    } else {
        $(currentObj).addClass('expand');
        $(currentObj).removeClass('collapse');
    }
}

function mobileFAQLink(currentObj) {
    $(currentObj).closest('.faqWrapperLeftSide').find('.faqList').slideToggle('slow');
    $(currentObj).find('.expandArrow').toggleClass('down');
}

function closeFAQSearchResult() {
    $(".faqWrapper .faqSearchResultBox").slideUp("slow");
}

function initStartNowCarousel(currentStartNowSlideParam) {
    var imageWidth = $('.startNowCarouselContainer').outerWidth();
    var slideContainer = $('.startNowCarouselTiles');
    var slides = $('.startNowCarouselTile');
    var startNowCarousel = $(".startNowCarousel");
    var carouselItem = $('.startNowCarouselItem');
    startnow_slide_count = slides.length;
    slideContainer.css("width", (slides.length * imageWidth) + "px");
    if ($('.startNowCarouselTile').length > 1) {
        currentStartNowSlide = currentStartNowSlideParam;

        var first_slide = slideContainer.find(".startNowCarouselTile:first-child");
        var last_slide = slideContainer.find(".startNowCarouselTile:last-child");

        // Clone the last slide and add as first li element
        last_slide.clone().prependTo(slideContainer);

        // Clone the first slide and add as last li element
        first_slide.clone().appendTo(slideContainer);


        $('.startNowCarouselTile').each(function (index) {
            var left_percent = (100 * index) + "%";
            $(this).css("left", left_percent);
        });
        var tileWidth = $('.startNowCarouselTile').outerWidth();
        if (startnow_slide_count > 1) {
            currentStartNowSlide = 1;
            $(slideContainer).css('left', '-200%');
        }
        else {
            $(slideContainer).css('left', '-100%');
        }

        // $('.startNowCarouselPrevArrow, .startNowCarouselNextArrow').show();
        if (currentStartNowSlide == 0) {
            $('.startNowCarouselPrevArrow').hide();
        } else {
            $('.startNowCarouselPrevArrow').show();
        }

        if (currentStartNowSlide == startnow_slide_count - 1) {
            $('.startNowCarouselNextArrow').hide();
        } else {
            $('.startNowCarouselNextArrow').show();
        }

        carouselItem.removeClass('active');
        carouselItem.eq(currentStartNowSlide).addClass('active');


    } else {
        $('.startNowCarousel').hide();
        $('.startNowCarouselPrevArrow').hide();
        $('.startNowCarouselNextArrow').hide();
    }
}

function startNowSlide() {
    if ($('.startNowCarouselTile').length > 1) {
        startNowSliderInterval = setInterval(() => {
            if (!$('.startNowCarouselContainer').hasClass('hover')) {
                startNowSlider(null, 'next');
            }
        }, 4000);
    }
}

function adjustHomePageBannerHoverClass(){
    $('.startNowCarouselContainer').hover(function () {
        $('.startNowCarouselContainer').addClass('hover');
    }, function () {
        $('.startNowCarouselContainer').removeClass('hover');
    });
}

function startNowSlider(currentObj, param) {
    // $('.startNowCarouselPrevArrow, .startNowCarouselNextArrow').hide();
    if (param == 'next') {
        currentStartNowSlide = currentStartNowSlide + 1;
    } else if (param == 'prev') {
        currentStartNowSlide = currentStartNowSlide - 1;
    } else if (param == 'indicator') {
        currentStartNowSlide = $(currentObj).attr('data-target').split('-')[1] - 1;
    }
    slide();
}

function slide() {
    var slideContainer = $('.startNowCarouselTiles');
    var slides = slideContainer.find('.startNowCarouselTile');
    var tileWidth = $('.startNowCarouselTile').outerWidth();
    var carouselItem = $('.startNowCarouselItem');
    var totalSlideWidth = tileWidth * slides.length;
    var animationSpeed = 1000;
    var marginLeft = (currentStartNowSlide * (-100) - 100) + "%";

    $(slideContainer).animate({
        "left": marginLeft,
    }, animationSpeed, function () {
        // If new slide is before first slide ...
        if (currentStartNowSlide < 0) {
            $(slideContainer).css("left", ((startnow_slide_count) * (-100)) + "%");
            currentStartNowSlide = startnow_slide_count - 1;
        }
        // If new slide is after last slide ...
        else if (currentStartNowSlide >= startnow_slide_count) {
            $(slideContainer).css("left", '-100%');
            currentStartNowSlide = 0;
        }
        carouselItem.removeClass('active');
        carouselItem.eq(currentStartNowSlide).addClass('active');

        if (currentStartNowSlide == 0) {
            $('.startNowCarouselPrevArrow').hide();
        } else {
            $('.startNowCarouselPrevArrow').show();
        }

        if (currentStartNowSlide == startnow_slide_count - 1) {
            $('.startNowCarouselNextArrow').hide();
        } else {
            $('.startNowCarouselNextArrow').show();
        }
    });

}

function checkNotificationHeight() {
    if ($('.notificationSection').hasClass('overlay')) {
        if ($('.notificationItem').length > 5) {
            $('.notificationSection.overlay').css('max-height', '100vh');
            $('.notificationSection.overlay').css('overflow', 'auto');
            $('.notificationSection.overlay').css('position', 'fixed');
            $('body').css('overflow', 'hidden');
        } else {
            $('.notificationSection.overlay').css('max-height', 'auto');
            $('.notificationSection.overlay').css('overflow', 'hidden');
            $('.notificationSection.overlay').css('position', 'absolute');
            $('body').removeAttr('style');
        }
    } else {
        $('.notificationSection').css('max-height', 'auto');
        $('.notificationSection').css('overflow', 'hidden');
        $('.notificationSection').css('position', 'fixed');
        $('body').removeAttr('style');
    }
}

function setExpandCollapseNotification() {
    $('.notificationItem .description').each(function () {
        var currNotification = $(this);
        var notificationWeidth = $(currNotification).width();
        if(notificationWeidth >= currNotification.closest(".notificationItem").width()){
            currNotification.closest('.notificationItem').find('.expand').show();
            currNotification.addClass('collapsed');
        }else{
            currNotification.closest('.notificationItem').find('.expand').hide();
        }
    });
}

function expandCollapseNotification(currObj) {
    $(currObj).closest('.notificationItem').find('.description').toggleClass('collapsed');
    $(currObj).toggleClass('expand');
    $(currObj).toggleClass('collapse');
}

function openCloseNotification(param) {
    if (param == 'open') {
        $('.notificationSection').addClass('overlay');
        $('.notificationOverlay').show();
        checkNotificationHeight();
        setExpandCollapseNotification();
    } else if (param == 'close') {
        $('.notificationSection').removeClass('overlay');
        $('.notificationOverlay').hide();
        checkNotificationHeight();
    }
    $('.notificationOverlay').on('click', function () {
        $(this).hide();
        $('.notificationSection').removeClass('overlay');
        checkNotificationHeight();
    });
}

function setStartNowCarouselHeight() {
    var maxHeight = 330;
    $('.startNowCarouselContentBox').each(function () {
        if ($(this).outerHeight() > 330) {
            if (maxHeight < $(this).outerHeight()) {
                maxHeight = $(this).outerHeight() + 30;
            }
        }
    });
    $('.startNowCarouselTile').css('height', maxHeight);
    $('.startNowCarouselTiles').css('height', maxHeight);
    $('.startNowCarouselContainer').css('height', (maxHeight + 40));
}
    <script>
        function inputs()
              {
                var num1 = document.getElementById('input1').value;
                var num2 = document.getElementById('input2').value;
                var num3 = document.getElementById('input3').value;
                var num4 = document.getElementById('input4').value;
                var num5 = document.getElementById("input5");
                var num6 = document.getElementById("input6");
                var num7 = document.getElementById("input7");
                var num8 = document.getElementById("input8");
                var num9 = document.getElementById("input9");
                var num10 = document.getElementById("input10");

                var num11 = document.getElementById("input11");

            // الباقي بعد المقدم 
                var sub = Number(num1) - Number(num2);
                num5.value = sub;
                // نسبة اجمالي الشهور 
                var mult = Number(num4) * Number(num3);
                num6.value = mult;
                // نسبة اجمالي الربح
                var mult2 = Number(num5.value) * Number(num6.value);
                num7.value = mult2;
                // سعر المنتج قسط قبل التقريب 
                var sum = Number(num7.value) + Number(num1);
                num8.value=sum;
                // االمبلغ المقسط 
                var sum2 = Number(num7.value) + Number(num5.value);
                num9.value = sum2;
                // القسط الشهري 
                var div = Number(num9.value) / Number(num3);
                num10.value = div.toFixed();
                // سعر المنتج قسط 
                var total = Number(num10.value) * Number(num3) + Number(num2);
                num11.value = total ;
              } 
    </script>

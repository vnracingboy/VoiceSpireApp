import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { LinearGradient } from 'expo-linear-gradient';


const Payment = () => {
    return (
        <LinearGradient colors={['#fee66a', '#ffffff']}
            style={tw`flex-1 items-center justify-center`}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={tw`text-3xl text-center font-semibold uppercase`}>Thanh toán</Text>

                <View style={tw`bg-[#EFFFFE] rounded-xl mx-5 mt-10`}>
                    <Text style={tw`uppercase italic font-semibold text-xl mx-8 mt-5`}
                    >
                        Chi tiết giao dịch
                    </Text>
                    <View style={tw`flex-row flex-wrap mx-8 mt-3`}>
                        <Text style={tw`uppercase text-[#636363] mt-3`}>Giá chi tiết</Text>
                        <Text style={tw`text-[#636363] text-base ml-23 mt-3`}>20,000 VND/PHÚT</Text>
                        <Text style={tw`uppercase text-[#636363] mt-3`}>Thời lượng yêu cầu</Text>
                        <Text style={tw`uppercase text-[#636363] ml-29.3 mt-3`}>3 PHÚT</Text>
                        <Text style={tw`uppercase font-semibold mt-3`}>Số tiền thanh toán</Text>
                        <Text style={tw`font-semibold text-base ml-19 mt-3`}>60,000 VND</Text>
                        <Text style={tw`uppercase font-semibold mt-3`}>Nội dung chuyển khoản</Text>
                        <Text style={tw`font-semibold ml-8 mt-3`}>1234567BAUBD</Text>
                    </View>
                    <Text style={tw`font-semibold italic text-base mt-5 ml-8`}>*Tại sao tôi phải thanh toán khoản chi phí này?</Text>
                    <Text style={tw`mx-8 mt-2`}>
                        Nhằm đảm bảo quyền lợi cho đôi bên. Khoảng phí này sẽ được
                        hệ thống chuyển đến đối tác của bạn khi dự án kết thúc. Khoảng
                        phí này sẽ được hoàn lại cho ban trong trường hợp đối tác không
                        thực hiện đúng yêu cầu dự án đề ra hoặc khi dự án hết hạn mà
                        dự án của bạn không đạt dược kết quả.
                    </Text>
                    <View style={tw`flex-row w-[300px] mx-10 mt-5`}>
                        <View style={tw`flex-1 h-[1px] bg-black`}/>
                    </View>
                    <View>
                        <Text style={tw`text-xl text-[#D02828] text-center font-semibold mt-5`}>VN PAY</Text>
                        <View style={tw`flex items-center justify-center border rounded-xl bg-[#fffce5] mx-8 my-3`}>
                            <View style={tw`bg-white rounded-xl p-3 mt-5`}>
                                <Image source={require('../assets/image/qrvnpay.png')}
                                    style={tw`flex items-center justify-center w-32 h-32`}
                                />
                                <Text style={tw`text-[#004e97] text-xs text-center font-semibold mt-2`}>VoiceSpire</Text>
                            </View>

                            <Text style={tw`text-[#004e97] font-bold text-base uppercase mt-1`}>Nguyen Bao Long</Text>
                            <Text style={tw`text-[#004e97] font-semibold`}>Tài khoản 105872162225</Text>
                            <Text style={tw`text-[#004e97] font-semibold`}>VietinBank CN TAY TIEN GIANG - PGD CAI BE</Text>
                            <Text style={tw`text-[#004e97] font-semibold`}>Đại học FPT</Text>
                        </View>

                        <Text style={tw`text-xl text-[#D02828] text-center font-semibold mt-5`}>MOMO</Text>
                        <View style={tw`flex items-center justify-center border rounded-xl bg-[#ffe24d] mx-8 my-3`}>
                            <View style={tw`bg-white rounded-xl p-3 my-10`}>
                                <Image source={require('../assets/image/qrmomo.png')}
                                    style={tw`flex items-center justify-center w-32 h-32`}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={tw`flex items-center`}>
                        <TouchableOpacity style={tw`my-5`}>
                            <Text style={tw`text-center text-base font-bold bg-[#F5851D] rounded-full px-10 py-2`}>Quay lại</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    )
}

export default Payment